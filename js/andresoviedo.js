// Google Analytics
(function(i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function() {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o), m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-66312832-1', 'auto');
ga('send', 'pageview');

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