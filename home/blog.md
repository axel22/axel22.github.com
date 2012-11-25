---
layout: blog
title: Blog
permalink: /blog/index.html
---



Here's my blog.
I rant about all kinds of stuff here.
You might not agree with everything I write.
In fact, you might not agree with any of it.
As a disclaimer for some of my statements which may sound too absolute to you,
everything I say is just my 2 cents.
Although it might not be immediately apparent,
often I care less than you might imagine.

Why this blog? Because thoughts and views should be shared.
Often seeing another point of view helps you grow.
Let me rephrase this in words which Voltaire is
[often incorrectly credited for](http://en.wikipedia.org/wiki/Evelyn_Beatrice_Hall):

> I disapprove of what you say, but I will defend to the death your right to say it.
> 
> Evelyn Beatrice Hall

Although, I'm not sure if I agree with this statement at all -- why would you [defend
something like that](/2012/11/25/freespeech.html)?


<h1>Posts</h1>

<ul class="entries">
  {% for post in site.posts %}
  <a href="{{ post.url }}">
    <li>

      {% capture thumbnail %}
        {% if post.image %}
          {{ post.image }}
        {% else %}
          /resources/images/quill.jpg
        {% endif %}
      {% endcapture %}
      <table>
        <tr>
          <td>
            <img src="{{ thumbnail }}"/>
          </td>
          <td>
            <span class="entrytitle">{{ post.title }}</span>
            <br/>
            {{ post.date | date: "%d.%m.%Y." }}
          </td>
        </tr>
      </table>
    </li>
  </a>
  {% endfor %}
</ul>






