var render = function() {
  var topBanner = nrequire('/templates/views/top_banner'),
      Controller = nrequire('/templates/controllers/about'),
      Detail = nrequire('/templates/views/about_detail'),
      BorderShadows = nrequire('/ui/border_shadows');
    
  var self = {
        win: UI.createWindow({
          navBarHidden: true,
          backgroundImage: '/images/backgrounds/main_bg.png',
          backgroundRepeat: true
        }),

        vert_view: UI.createView({
          layout: 'vertical'
        }),
        
        donate_banner: topBanner.render().view,

        shadow: BorderShadows({top: 120}).view,

        subnav: UI.createView({
          top: 0,
          height: 120,
          width: "100%"
        }),

        detail_view: Detail.render()
      };

  
  self.vert_view.add(self.subnav);
  self.vert_view.add(self.detail_view.view);
  self.win.add(self.shadow);
  self.win.add(self.vert_view);
  var image1 = Ti.UI.createImageView
  ({
          image: 'images/photo1.jpeg',width:100,height:100,left:10
  })
  image1.addEventListener('click',function(e)
  { 
	  self.detail_view.photo.image =  '/images/photo1.jpeg';
	  self.detail_view.title.text= "About Us";
	  self.detail_view.content.text= "We envision a world in which all children can pursue a quality education, reach their full potential and contribute to their community and the world."+
                                   "To achieve this goal, we focus on two areas where we believe we can have the greatest impact: literacy and gender equality in education.  We work in collaboration with communities and local governments across Asia and Africa to develop literacy skills and a habit of reading among primary school children, and support girls to complete secondary school with the life skills they’ll need to succeed in school and beyond.";
  });
  self.subnav.add(image1);
  var image2 = Ti.UI.createImageView
  ({
          image: 'images/photo2.jpeg',width:100,height:100,left:110
  })
  image2.addEventListener('click',function(e)
  { 
	   self.detail_view.photo.image =  '/images/photo2.jpeg';
	   self.detail_view.title.text= "Our Program";
	   self.detail_view.content.text= "We believe that World Change Starts with Educated Children and have committed to focusing on two key areas where we can have the greatest impact: literacy and gender equality in education."+
                                      "Literacy is the cornerstone of all learning and fundamental for participation in today’s global society, yet 793 million people across the globe lack the ability to read and write. That includes every medicine bottle, employment ad and ballot form they encounter. Of all the illiterate people in the world today, two-thirds are female and over 90 percent live in developing countries."+
                                      "Educating girls and women is widely acknowledged as the most powerful and effective way to address global poverty. Women who finish secondary school earn more money, have smaller, healthier families, and are more likely to educate their own children—breaking the cycle of illiteracy in one generation."+
                                      "Room to Read partners with communities across the developing world to promote literacy and gender equality in education by establishing libraries, constructing classrooms, publishing local-language children’s books, training educators and supporting girls’ education. We believe all children deserve the opportunity to reach their full potential, and that investing in education now will pay dividends for generations to come.";
  });
  self.subnav.add(image2);
  var image3 = Ti.UI.createImageView
  ({
          image: 'images/photo3.jpeg',width:100,height:100,left:210
  })
  image3.addEventListener('click',function(e)
  { 
	 self.detail_view.photo.image =  '/images/photo3.jpeg'; 
	  self.detail_view.title.text= "Get Involved";
	  self.detail_view.content.text= "Invest in education \n\n"+
	                                 "We are on track to reach 10 million children by the year 2015, and you can help us get there. In a world with 793 million illiterate people—2/3 of whom are women and girls—the time to act is now.\n"+
	                                  "\nStart your own campaign \n\n"+
	                                  "Run a marathon, have a bake sale, grow a beard or give up your birthday! Do good while having fun by starting your own campaign to raise money for a school, a library or years of girls' education.";
  });
  self.subnav.add(image3);
  return self;
};

module.exports = {render: render};
