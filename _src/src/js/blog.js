/*$(document).ready(function() {
	//feed to parse
	var feed = "blog/blog.rss";
	
	$.ajax(feed, {
		accepts:{
			xml:"application/rss+xml"
		},
		dataType:"xml",
		success:function(data) {
			//Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript
			var container = document.getElementById("feed");
			$(data).find("item").each(function () { // or "item" or whatever suits your feed
				var el = $(this);
				console.log("------------------------");
				console.log("title      : " + el.find("title").text());
				console.log("link       : " + el.find("link").text());
				console.log("description: " + el.find("description").text());

				var h4 = document.createElement("h6");
				var a = document.createElement("a");
				a.appendChild(document.createTextNode(el.find("title").text()));
				a.href = el.find("link").text();
				h4.appendChild(a);
				container.appendChild(h4);

				var p = document.createElement("p");
				p.innerHTML = el.find("description").text();
				container.appendChild(p);
			});
	

		}	
	});
	
});*/