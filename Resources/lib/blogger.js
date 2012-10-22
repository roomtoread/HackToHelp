exports.getUpdates = function(callback){
 	var xhr = Ti.Network.createHTTPClient({});
    xhr.onload = function(res){
		Ti.API.info('>>> got the feed! ... ');
 
        // Now parse the feed XML 
        var xml = this.responseXML;
       
        var items = xml.getElementsByTagName("entry");
		var data = [];
		try {
			for (var i = 0; i < items.length; i++) {
				var item = items.item(i);
				try {
					data.push({
						title: item.getElementsByTagName('title').item(0).text,
						link: item.getElementsByTagName('link').item(0).text,
						summary : item.getElementsByTagName('summary').item(0).text,
						published: item.getElementsByTagName('published').item(0).text,
						content : item.getElementsByTagName('content').item(0).text
					});
				}catch(e) {
					Ti.API.error(e);
				}
			}
		}catch(e){
			Ti.API.error(e);
		}
		Ti.API.info('>>> callback! ... ');
  	  	callback(data);	
    }
    xhr.open("GET", 'http://blog.roomtoread.org/room-to-read/atom.xml');
	xhr.send();
  	    
  
}
