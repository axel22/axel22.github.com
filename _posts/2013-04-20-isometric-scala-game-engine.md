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
  <img src="/resources/images/dungeon5-small.png" height="205px" width="320px" class="image">
</a></td>
<td><a href="/resources/images/dungeon6.png">
  <img src="/resources/images/dungeon6-small.png" height="205px" width="320px" class="image">
</a></td>
</tr>
</table>

In case it's not obvious from the screenshots -- I am a huge fan of sprites.
You can't blame me -- I grew up on them.
In fact, I am one of those guys who believe that stunning graphics is not an essential
ingredient of a quality game or a prerequisite for good gameplay.
In fact, I spent a lot of time playing games like [ADOM](http://www.ancientdomainsofmystery.com/2011/07/jade013-sneak-preview.html).
A bit of nice visual effects is fine, but the game should not be just about those.

However, this blog post is not meant to be a philosophical debate -- rather, I want to share
some of my experience of implementing in Scala.
In the rest of this blog post I describe the details of the engine implementation.
I will go through the rendering process, some of the advantages of Scala when it comes
to conciseness and pretty code (particularly when dealing with OpenGL) and creating sprites
using 3dsMAX with some custom MaxScript functionality for outputing data for 3d objects.
Finally, I share some thoughts on what I would do differently, what some of the goals were
and possible future work if my free time allows it.

To be continued...

<!--
about the architecture - how do we render

on opengl wrapper

future - radiosity or something similar

future - fully 3d

future - reactive framework for encoding game rules

future - more than just the editor
-->


