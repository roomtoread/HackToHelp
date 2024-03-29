var render = function(imageType) {
  var Controller = nrequire('/templates/controllers/about_detail');
  
  var self = {
        view: UI.createScrollView({
          height: Ti.UI.FILL,
          backgroundColor: 'transparent',
          layout: 'vertical'
        }),

        title: UI.createLabel({
          text: "About Us",
          top: 20,
          left: 20,
          height: Ti.UI.SIZE,
          style_id: 'h1'
        }),

        profile_view: UI.createView({
          layout: 'horizontal',
          top: 10,
          left: 10,
          right: 20,
          width: Ti.UI.FILL,
          height: Ti.UI.SIZE
        }),
    
        photo_container: UI.createView({
          left: 0,
          width: 173,
          height: 124,
          backgroundImage: "/images/backgrounds/about_mobile_featured_img_bg.png",
          style_id: 'about_photo_container'
        }),

        photo: UI.createImageView({
          height: "85%",
          image:'/images/photo1.jpeg',
          top: 4,
          style_id: 'about_photo'
        }),

        share_view: UI.createView({
          layout: 'vertical',
          left: 10,
          height: Ti.UI.SIZE,
          width: Ti.UI.SIZE
        }),

        tweet_button: UI.createButton({
          width: 103,
          height: 37,
          square: true,
          backgroundImage: '/images/buttons/about_mobile_twitter_share_btn.png',
          backgroundSelectedImage: '/images/buttons/about_mobile_twitter_share_btn_p.png',
          style_id: 'twitter_share_button'
        }),

        fb_button: UI.createButton({
          top: 10,
          width: 103,
          height: 37,
          square: true,
          backgroundImage: '/images/buttons/about_mobile_fb_share_btn.png',
          backgroundSelectedImage: '/images/buttons/about_mobile_fb_share_btn_p.png',
          style_id: 'fb_share_button'
        }),

        content: UI.createLabel({
          top: 10,
          left: 20,
          right: 20,
          text:"We envision a world in which all children can pursue a quality education, reach their full potential and contribute to their community and the world."+
                                   "To achieve this goal, we focus on two areas where we believe we can have the greatest impact: literacy and gender equality in education.  We work in collaboration with communities and local governments across Asia and Africa to develop literacy skills and a habit of reading among primary school children, and support girls to complete secondary school with the life skills they’ll need to succeed in school and beyond.",
          style_id: 'p4'
        })
      };
  
  if(isAndroid) self.photo.width = Scaler({width: 280});
  
  self.view.add(self.title);
  
  self.photo_container.add(self.photo);
  self.profile_view.add(self.photo_container);
  self.share_view.add(self.tweet_button);
  self.share_view.add(self.fb_button);
  self.profile_view.add(self.share_view);
  self.view.add(self.profile_view);
  self.view.add(self.content);

  Controller(self);
  return self;
};

module.exports = {render: render};
