---
layout: default
title: Quote of the Day
permalink: /quote/index.html
---


<br/>
<br/>
<br/>
<br/>


Here is the selected quote for today:

<div class="bigquote">
  <div id="bigquotebox">
    <script>
    var quotebox = document.getElementById("bigquotebox");
    var quote = fetchQuote();
    var textnode = document.createElement("p");
    textnode.appendChild(document.createTextNode(quote.text));
    var authornode = document.createElement("p");
    authornode.appendChild(document.createTextNode(quote.author));
    authornode.setAttribute("style", "text-align: right;");
    quotebox.appendChild(textnode);
    quotebox.appendChild(authornode);
    </script>
  </div>
</div>


Disagree? [Let me know](/home/contact/).

