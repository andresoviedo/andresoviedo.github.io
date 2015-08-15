// Blog
google.load("feeds", "1");
function initialize() {
	var feed = new google.feeds.Feed(
			"http://andresoviedo82.blogspot.com/feeds/posts/default");
	feed.load(function(result) {
		if (!result.error) {
			var container = document.getElementById("feed");
			for (var i = 0; i < result.feed.entries.length; i++) {
				var entry = result.feed.entries[i];

				var h4 = document.createElement("h6");
				var a = document.createElement("a");
				a.appendChild(document.createTextNode(entry.title));
				a.href = entry.link;
				h4.appendChild(a);
				container.appendChild(h4);

				var p = document.createElement("p");
				p.appendChild(document.createTextNode(entry.contentSnippet));
				container.appendChild(p);
			}
		}
	});
}
google.setOnLoadCallback(initialize);