---
layout: blog
title: Why Functional Programming Helps Writing Better Code?
poster: Alex
image: /resources/images/scala-programming-language.jpg
---


Lately, I've been ending up in a lot of discussions about functional programming.
One argument I hear very often is: what use is functional programming when all useful programs have side-effects?
Another is: programming languages used in the industry are not functional, so why learn a functional programming language?
Yet another: if functional programming were so good, it would have been used in the industry a lot more.
While these arguments are conflating cause and effect, and disregard how language adoption works,
they are frequently rooted in the lack of familiarity with functional programming.
Therefore, I decided to write a blog post to shed some light on the first question:
can functional programming be useful for imperative programmers and how?

It turns out that familiarity with functional programming helps writing better imperative programs.
I first came across at this thought while reading the [Programming in Scala book](www.artima.com/shop/programming_in_scala_2ed):

>  We believe learning about Scala, and the ideas behind it, can help you become a better programmer in general.

At first I thought this was somewhat of a marketing hype.
I don't think so anymore.

I don't want to embarge on a functional programming rant,
or give an in-depth analysis of the advantages and disadvantages of functional programming.
Instead, I will give a simple example of why functional programming concepts are useful.
This way, this blog post should be useful both to functional programming beginners,
and people seeking a different perspective, or just looking out to learn something new.

So, let's get technical.

type Query[T] = () => Option[T]
