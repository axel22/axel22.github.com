---
---

Date.prototype.getDOY = function() {
	var onejan = new Date(this.getFullYear(),0,1);
	return Math.ceil((this - onejan) / 86400000);
}

function fetchQuote() {
	var quotes = {% include quotes.json %};
	var today = new Date();
	var day = today.getDOY() + 2;
	var index = day % quotes.length;
	return quotes[index];
}

function setBigQuoteBox() {
	var quotebox = document.getElementById("bigquotebox");
	var quote = fetchQuote();
	var textnode = document.createElement("p");
	textnode.appendChild(document.createTextNode(quote.text));
	var authornode = document.createElement("p");
	authornode.appendChild(document.createTextNode(quote.author));
	authornode.setAttribute("style", "text-align: right;");
	quotebox.appendChild(textnode);
	quotebox.appendChild(authornode);
}
