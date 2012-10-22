var bookshelf = {

getView: function ()
{
  
  var mainView =  Titanium.UI.createView({ 
  	  backgroundImage:'images/mainbg.png', 	
	  width:340,
	  height:480,
	  align:'center' 
  });
  var slider1 = Ti.UI.createImageView({image:'images/slider.png',height:60,width:340, top:130});
  mainView.add(slider1);
  var slider1Lbl = Ti.UI.createLabel({
          top: 35,height:20,font:{fontSize:13,fontWeight:'bold'},color:'#b77f2f',
          left: 135,width:100,
          text:"Reports"
  }); 
  mainView.add(slider1Lbl);
  
          
  var slider2 = Ti.UI.createImageView({image:'images/slider.png',height:60,width:340, top:260});
  mainView.add(slider2);
  var slider2Lbl = Ti.UI.createLabel({
          top: 165,height:20,font:{fontSize:13,fontWeight:'bold'},color:'#b77f2f',
          left: 140,width:100,
          text:"Books"
  }); 
  mainView.add(slider2Lbl);
   
  var slider3 = Ti.UI.createImageView({image:'images/slider.png',height:60,width:340, top:390});
  mainView.add(slider3);
  var slider3Lbl = Ti.UI.createLabel({
          top: 295,height:20,font:{fontSize:13,fontWeight:'bold'},color:'#b77f2f',
          left: 135,width:100,
          text:"Newsletter"
  }); 
  mainView.add(slider3Lbl);
   
  bookshelf.addBooks(mainView);
  
  this.addNewsLetter(mainView);
  return mainView;
  
},
addBooks:function(mainView)
{
	
	var topScrollView = Titanium.UI.createScrollView
	({
           layout:"horizontal",backgroundColor:'transparent',contentWidth:'auto',
           top:40,showHorizontalScrollIndicator:true,left:0, height:120
    });
    mainView.add(topScrollView);
    
    Cloud.Objects.query({classname:'books',page:1,per_page:10}, function(e){
    	
    	var books = e.books;
    	for(var i =0;i<books.length;i++)
        {
    	    var bookView = Titanium.UI.createImageView({image:books[i].image,width:86,height:90,left:10,top:20});
    	    
    	    var bookInfo = new Object();
    	    bookInfo["url"] = books[i].content;
        
            bookView.bookInfo = bookInfo;
            bookshelf.attachEvents(bookView);
            topScrollView.add(bookView);
    
         }
		
	})
	
   
	 
    
    
    var bottomScrollView = Titanium.UI.createScrollView
	({
           layout:"horizontal",height:120,backgroundColor:'transparent',contentWidth:'auto',
           top:190,showHorizontalScrollIndicator:true,left:0,
    });
     mainView.add(bottomScrollView);
     Cloud.Objects.query({classname:'other_books',page:1,per_page:10}, function(e){
    	
    	var books = e.other_books;
    	for(var i =0;i<books.length;i++)
        {
    	    var bookView = Titanium.UI.createImageView({image:'books/book.png',width:100,height:110,left:10,top:0});
    	    bookView.image = books[i].image;
    	   
    	    var bookInfo = new Object();
    	    bookInfo["url"] = books[i].content;
        
            bookView.bookInfo = bookInfo;
            bookshelf.attachEvents(bookView);
            bottomScrollView.add(bookView);
    
         }
		
	})
    
   
},
addNewsLetter:function(mainView)
{
	
	var scrollView = Titanium.UI.createScrollView
	({
           layout:"horizontal",height:100,backgroundColor:'transparent',contentWidth:'auto',contentHeight:'auto',
           bottom:70,showHorizontalScrollIndicator:true,left:0,
    });
    
    Cloud.Objects.query({classname:'newsletters',page:1,per_page:10}, function(e){
    	
    	var newsletters = e.newsletters;
    	for(var i =0;i<newsletters.length;i++)
        {
    	    var letterView = Titanium.UI.createView({color:'#000',width:96,height:60,left:20,bottom:0,backgroundColor:'transparent'});
    	
    	    var letterText = Titanium.UI.createTextField({left:15,top:2,font:{fontSize:7,fontWeight:'normal'},width:96,height:10,top:0,backgroundColor:'transparent'});
    	    letterText.value =newsletters[i].title;
    	
    	    var letterImage = Titanium.UI.createImageView({width:96,height:60,left:0,bottom:0});
            letterImage.image = 'images/newsletter.png';
            letterImage.add(letterText);
        
            letterView.add(letterImage);
            scrollView.add(letterView);
            letterImage.url = newsletters[i].content;
            letterImage.addEventListener('dblclick',function(e)
	        { 
	           quickview.show(e.source.url);
	        });
    
         }
		
	})
	
    
   
    
    mainView.add(scrollView);
},
attachEvents:function(bookView)
{
	var counter = 0; 
	
	bookView.addEventListener('click',function(e)
	{ 
	    quickview.show(e.source.bookInfo["url"]);
	});
	/*
    bookView.addEventListener('touchmove',function(e)
    { 
    	
		if ((counter % 3) == 0) 
		{ 
			if(Titanium.UI.orientation == 2)//portrait home button up
			{
				var left = win1.width-e.globalPoint.x-30;
			    var top = win1.height-e.globalPoint.y-65; 
			    if(left < 310 && left > 0)
			    {
			       e.source.left = left; 
			    }
				if(top < 420 && top > 0)
			    {
			       e.source.top = top; 
			    }
			}else if(Titanium.UI.orientation == 1) //portrait home button down
			{
				var left =  e.globalPoint.x-30;
			    var top = e.globalPoint.y-65; 
			    if(left < 700 && left > 0)
			    {
			       e.source.left = left; 
			    }
				if(top < 650 && top > 0)
			    {
			       e.source.top = top; 
			    }

			}
		} 
		counter += 1; 
			   
	});
	bookView.addEventListener('touchend',function(e)
	{ 
		var pLeft = e.source.left;
		var pTop = e.source.top;
		alert("Top: "+pTop+" left: "+pLeft);
		
    });*/

},

}