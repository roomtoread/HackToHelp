var render = function() {
  Ti.include('/templates/windows/bookshelf/bookshelf.js');
  Ti.include('/templates/windows/bookshelf/quickview.js');
  var topBanner = nrequire('/templates/views/top_banner'), 
      Controller = nrequire('/templates/controllers/news'), 
      BorderShadows = nrequire('/ui/border_shadows');
  
  var self = {
        win: UI.createWindow({
          navBarHidden: true,
          backgroundColor: 'red',
          backgroundRepeat: true
        }),

        donate_banner: topBanner.render().view,

        shadow: BorderShadows({
          top: 100
        }).view,

        table: UI.createTableView({
          top: 50,
          backgroundColor: 'transparent',
          style_id: 'list_table'
        })
        
      };
  
  //self.win.add(self.donate_banner);
  //self.win.add(self.shadow);
  //self.win.add(self.table);
  var shelfView = bookshelf.getView();
  self.win.add(shelfView);
  Controller(self);
  return self;
};

module.exports = {render: render};
