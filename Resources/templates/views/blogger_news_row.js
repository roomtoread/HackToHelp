var render = function(news) {
  var DateFormatter = nrequire('/lib/date_formatter');
  Ti.API.info('calling render blog row')
  var self = {
        row: UI.createTableViewRow({
          created: DateFormatter.date(news.published, {parsed: true}),
          backgroundColor: 'transparent',
          news: news,
          kind: news.kind,
          style_id: 'news_row'
        }),

/*        photo: UI.createImageView({
          image: news.user.profile_image_url,
          top: 10,
          left: 10,
          width: 40,
          height: 40,
          square: true,
          style_id: 'news_photo'
        }),
  */  
        content_view: UI.createView({
          layout: 'vertical',
          top: 10,
          left: 60,
          right: 10,
          height: Ti.UI.SIZE,
          style_id: 'news_container'
        }),

        title_view: UI.createView({
          height: Ti.UI.SIZE,
          layout: 'horizontal'
        }),

        title: UI.createLabel({
          text: news.title,
          left: 0,
          style_id: 'h4' 
        }),

/*        date: UI.createLabel({
          text: DateFormatter.date(news.published),
          left: 10,
          right: 0,
          style_id: 'p3'
        }),
*/
        summary: UI.createLabel({
          text: news.summary,
          top: 5,
          left: 0,
          width: Ti.UI.FILL,
          style_id: 'p3'
        })
      };

  self.title_view.add(self.title);
 // self.title_view.add(self.date);
  self.content_view.add(self.title_view);
  self.content_view.add(self.summary);
  self.row.add(self.content_view);
  
  Ti.API.info('rendering row')
  return self;
};

module.exports = {render: render};
