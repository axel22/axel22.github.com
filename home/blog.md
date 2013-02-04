---
layout: blog
title: Blog
permalink: /blog/index.html
---



Here's my blog.
I rant about all kinds of stuff here.

[![RSS](/resources/images/rss-icon.png)](/feed.xml)

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
            <img src="{{ thumbnail }}" class="fixedheight"/>
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






