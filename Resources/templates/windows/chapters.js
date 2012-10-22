 var render = function() 
{
  	var topBanner = nrequire('/templates/views/top_banner'),
      Controller = nrequire('/templates/controllers/chapters'),
      BorderShadows = nrequire('/ui/border_shadows');
  	
  	Titanium.Geolocation.purpose = "Recieve User Location";
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	Titanium.Geolocation.distanceFilter = 10;

						  var self = {
						        win: UI.createWindow({
						          navBarHidden: true,
						          backgroundImage: '/images/backgrounds/main_bg.png',
						          backgroundRepeat: true
						        }),
						
						        donate_banner: topBanner.render().view,
						
						        shadow: BorderShadows({ top: 100 }).view,
						
						       table: Titanium.Map.createView({
						        mapType: Titanium.Map.STANDARD_TYPE,
						        region: {latitude:33.74511, longitude:-84.38993, latitudeDelta:0.5, longitudeDelta:0.5},
						        animate:true,
						        regionFit:true,
						        userLocation:true//,
						        })
						
						        
						      };
       
  self.win.add(self.donate_banner);
  self.win.add(self.shadow);
  self.win.add(self.table);

 
  
  
  
  
				   Titanium.Geolocation.getCurrentPosition(function(e){ 
				
					self.table.region={latitude:e.coords.latitude, longitude:e.coords.longitude, latitudeDelta:0.5, longitudeDelta:0.5};
				
				  });
  
  

  
  
 Cloud.Objects.query({classname: 'Chapters', page: 1, per_page:100},
  function(e){ 
								  	 if (e.success) {
								  	 
								                var objects = e['Chapters'];
								                
								           
								                if (!objects.length) {
								                    alert('No objects found!');
								                }
								                else {
								             var chapters = e.Chapters;
								             for(var i =0;i<chapters.length;i++)
								             {
								             	 var chapterpin = Titanium.Map.createAnnotation({
													     	id:chapters[i].id,
															latitude:chapters[i].lat,
															longitude:chapters[i].lon,
															title:chapters[i].city + ', ' +chapters[i].state +' Chapter',
															//subtitle:response.results[0].formatted_address,
															pincolor:Titanium.Map.ANNOTATION_RED,
															animate:true
														//rightButton: '../images/apple_logo.jpg',
														//myid:2 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
														});	
								                	
								                	self.table.addAnnotation(chapterpin);
								             	
								             	
								             	
								             	
								             	
								             	
								             	
								             }
								                	
								                	
								                };
								  	
								  	
								  	
								  };
								  
  
  });
  
  Controller(self);
  return self;

};

module.exports = {render: render};
