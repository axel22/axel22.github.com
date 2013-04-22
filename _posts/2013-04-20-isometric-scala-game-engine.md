---
layout: blog
title: Isometric Scala Game Engine
image: /resources/images/iso-game.png
poster: Alex
---

Last year I've spent some time working on an isometric RPG-like game engine written in Scala.
Knowing that I wouldn't be able to write a game in my free time alone,
I've decided to limit myself to a level editor rather than a complete game.

One of the classic arguments people have against Java when it comes to coding games, and along that line Scala too,
is bad performance -- I was eager to find out to which extent this is really a problem.
While what I wrote is not a Crysis engine and this is hardly an extensive analysis,
it seems to me that with a little knowledge of what certain higher abstractions translate into,
you can write fairly efficient game engine code when it comes to Baldur's Gate/Diablo style RPG-like engines.
The level editor is written largely in Scala, relying mainly on SWT and OpenGL libraries
(specifically, the JOGL bindings), with a little bit of shaders written using GLSL.
There are some screenshots below.

<table>
<tr>
<td><a href="/resources/images/dungeon1.png">
  <img src="/resources/images/dungeon1-small.png" height="205px" width="320px" class="image"></img>
</a></td>
<td><a href="/resources/images/dungeon2.png">
  <img src="/resources/images/dungeon2-small.png" height="205px" width="320px" class="image"></img>
</a></td>
</tr>
<tr>
<td><a href="/resources/images/dungeon3.png">
  <img src="/resources/images/dungeon3-small.png" height="205px" width="320px" class="image"></img>
</a></td>
<td><a href="/resources/images/dungeon4.png">
  <img src="/resources/images/dungeon4-small.png" height="205px" width="320px" class="image"></img>
</a></td>
</tr>
<tr>
<td><a href="/resources/images/dungeon5.png">
  <img src="/resources/images/dungeon5-small.png" height="205px" width="320px" class="image"/>
</a></td>
<td><a href="/resources/images/dungeon6.png">
  <img src="/resources/images/dungeon6-small.png" height="205px" width="320px" class="image"/>
</a></td>
</tr>
</table>

In case it's not obvious from the screenshots -- I am a huge fan of sprites.
You can't blame me -- I grew up on them.
In fact, I am one of those guys who believe that stunning graphics is not an essential
ingredient of a quality game or a prerequisite for good gameplay.
In fact, I spent a lot of time playing games like [ADOM](http://www.ancientdomainsofmystery.com/2011/07/jade013-sneak-preview.html).
A bit of nice visual effects is fine, but the game should not be just about those.
Also, sprites often allow a higher level of detail, which is neater to the eye.
This higher level of detail comes from the fact that they are pre-rendered, potentially
using models with a higher polygon count, special effects like hair and fur, as well
as material models that allow defining surface properties such as reflection, bump
and transparency.
Although GPUs are getting faster every day, usually it is more expensive to compute these on-the-fly.
But, I will get back to this at the end of the post.

However, this blog post is not meant to be a philosophical debate -- rather, I want to share
some of my experience of implementing in Scala.
In the rest of this blog post I describe the details of the engine implementation.
I will go through the rendering process, some of the advantages of Scala when it comes
to conciseness and pretty code (particularly when dealing with OpenGL) and creating sprites
using 3dsMAX with some custom MaxScript functionality for outputing data for 3d objects.
Finally, I share some thoughts on what I would do differently, what some of the goals were
and possible future work if my free time allows it.

### The rendering procedure

As mentioned before, most of the game is sprite-based.
<img src="/resources/images/org.brijest.storm.engine.model.characters.castle.FireplaceLeft.png" class="imageinlineright transparent"/>
All sprites are rendered using 3ds MAX and then placed into appropriate positions by the
game engine at runtime to produce the entire image.
What are <a href="http://en.wikipedia.org/wiki/Sprite_(computer_graphics)">sprites</a>?
In short, these are two-dimensional images integrated into a larger scene.
The scene is in this case what you see in the screenshots above.
A sprite is just a relatively small PNG image with transparent background that you can blend into the scene.
<img src="/resources/images/org.brijest.storm.engine.model.DungeonMoss.png" class="imageinline transparent"/>
There are two basic types of sprites in this engine.
The first are terrain sprites and the second character sprites.
The fireplace shown on the right image is a character sprite -- it is rendered above the terrain sprites.
The small rhomboid on the left with some grass on top is a terrain tile.
Terrain tiles cover the scene -- other sprites are rendered to appear as if they are above them.
Terrain tiles are sprites that have a fixed size, whereas character sprites may have a different height
and may occupy several tiles.

<img src="/resources/images/org.brijest.storm.engine.model.characters.tree.OldOak.png" class="imageinlineright transparent"/>
When it comes to fully 2D top-down perspectives it's very easy to place sprites into the
scene -- usually it amounts to passing through the image in the order in which sprites should appear
and blending them.
<img src="/resources/images/org.brijest.storm.engine.model.characters.castle.DiningChairWest.png" class="imageinline transparent"/>
In the case of tile-based top-down perspective games, where different sprites occupy different tiles, this means having to loop
through the rows of tiles in the scene and through the tiles in each row.
However, when it comes to isometric tile-based engines where a sprite may occupy more than a single
tile, things get a bit more convoluted.
The chair on the left occupies a single tile (1x1 sprite),
but the oak tree on the right occupies four tiles (2x2 sprite)
and the fireplace shown earlier occupies three tiles (1x3 sprite).
The sprites can no longer be drawn going from one corner of the scene to another,
so two simple `for` loops will not do.
Lets focus on the following detail in one of the screenshots -- a dining table with chairs around it.
<img src="/resources/images/dining-table.png" class="imageinline"/>
The dining table is something like a 7x3 sprite and each chair is a 1x1 sprite.
If we render rows of tiles from the north-east going to south-west, and render tiles in each
row going from north-west to south-east, then the chair on the head of the table will be rendered
after the table, making it seems as if they overlap.
Consequently, if we render the rows from north-west to south-east, then the chairs in the middle
of the table will be drawn over it.

The naive approach of sorting all the visible sprites in the scene (either by maintaining a binary
search tree or sorting them just once before rendering) and then rendering them in that order
won't work either.
The problem is that the sprites that occupy rectangular areas do not form a *total order* with respect to rendering
(note that the more general problem of rendering sprites that occupy non-rectangular areas is not
really solvable -- in this case sprites could overlap).
Instead, they form a *partial order* -- given two sprites and their locations on the screen
you can only tell which should be rendered first if they overlap.
Otherwise, their relative rendering order depends on other sprites that are potentially between them.
This means that binary search trees or an efficient comparison sort won't help you
(although a quadratic complexity bubble sort might -- try to convince yourself of this).
These approaches assume the existence of total order between the elements,
without it the sprites would be spuriously rendered out of order.

Another complicating factor is that the terrain is not just one huge flat area -- different terrain tiles can have different elevations.
This design decision is meant to make the whole scene more realistic.
Note, that the engine does not allow two tiles to be above each other, though, to keep things simpler.

After having shown the difficulties of rendering in an isometric tile-based scene,
lets show how our engine copes with this.

To be continued ...

<!--
about the architecture - how do we render

on opengl wrapper

future - radiosity or something similar

future - fully 3d
- sprites are cumbersome
- shaders allow procedural materials that look just as good

future - reactive framework for encoding game rules

future - more than just the editor
-->


