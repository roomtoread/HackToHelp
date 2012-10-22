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
  
  var slider2 = Ti.UI.createImageView({image:'images/slider.png',height:60,width:340, top:260});
  mainView.add(slider2);
  
  var slider3 = Ti.UI.createImageView({image:'images/slider.png',height:60,width:340, top:390});
  mainView.add(slider3);
  
  bookshelf.addBooks(mainView);
  
  this.addNewsLetter(mainView);
  return mainView;
  
},
addBooks:function(mainView)
{
	var books = bookshelf.getTopBooks();
	var topScrollView = Titanium.UI.createScrollView
	({
           layout:"horizontal",backgroundColor:'transparent',contentWidth:'auto',
           top:40,showHorizontalScrollIndicator:true,left:0, height:120
    });
    mainView.add(topScrollView);
    
    for(var i =0;i<books.length;i++)
    {
    	var bookView = Titanium.UI.createImageView({image:'books/book.png',width:106,height:120,left:10,top:20});
    	
    	var letterText = Titanium.UI.createTextArea({touchEnabled:false,color:'#fff',left:15,top:10,font:{fontSize:11,fontWeight:'normal'},width:65,height:70,top:0,backgroundColor:'transparent'});
    	letterText.value =books[i].name;
    	bookView.add(letterText);
    	
    	var bookInfo = new Object();
    	bookInfo["url"] = books[i].url;
        
        bookView.bookInfo = bookInfo;
        this.attachEvents(bookView);
        topScrollView.add(bookView);
    
    }
    
    
    var books = bookshelf.getBottomBooks();
    var bottomScrollView = Titanium.UI.createScrollView
	({
           layout:"horizontal",height:120,backgroundColor:'transparent',contentWidth:'auto',
           top:190,showHorizontalScrollIndicator:true,left:0,
    });
     mainView.add(bottomScrollView);
     
    for(var i =0;i<books.length;i++)
    {
    	var bookView = Titanium.UI.createImageView({image:'books/book.png',width:106,height:120,left:10,top:0});
    	
    	var letterText = Titanium.UI.createTextArea({touchEnabled:false,color:'#fff',left:15,top:10,font:{fontSize:11,fontWeight:'normal'},width:65,height:70,top:5,backgroundColor:'transparent'});
    	letterText.value =books[i].name;
    	bookView.add(letterText);
    	
    	var bookInfo = new Object();
    	bookInfo["url"] = books[i].url;
        
        bookView.bookInfo = bookInfo;
        this.attachEvents(bookView);
        bottomScrollView.add(bookView);
    }
    
   
},
getBottomBooks:function()
{
	var books = new Array();
	
	var book = new Object();
	book.image = "books/book.png";
	book.name = "20111 Annual Report";
	book.url =  "books/book1.pdf";
	books.push(book);

	var book = new Object();
	book.image = "books/book.png";
	book.name = "20111 Girls' Education Yearbook";
	book.url =  "books/book2.pdf";
	books.push(book);
	
	return books;
},
getTopBooks:function()
{
	var books = new Array();
	
	var book = new Object();
	book.image = "books/book.png";
	book.name = "2011 Annual Report";
	book.url =  "books/book1.pdf";
	books.push(book);

	var book = new Object();
	book.image = "books/book.png";
	book.name = "2011 Girls' Education Yearbook";
	book.url =  "books/book2.pdf";
	books.push(book);


	
	return books;
},
addNewsLetter:function(mainView)
{
	
	var scrollView = Titanium.UI.createScrollView
	({
           layout:"horizontal",height:100,backgroundColor:'transparent',contentWidth:'auto',contentHeight:'auto',
           bottom:70,showHorizontalScrollIndicator:true,left:0,
    });
    var letters = bookshelf.getLetters();
    
    for(var i =0;i<letters.length;i++)
    {
    	var letterView = Titanium.UI.createView({color:'#000',width:96,height:60,left:20,bottom:0,backgroundColor:'transparent'});
    	
    	var letterText = Titanium.UI.createTextField({left:15,top:2,font:{fontSize:7,fontWeight:'normal'},width:96,height:10,top:0,backgroundColor:'transparent'});
    	letterText.value =letters[i].name;
    	
    	var letterImage = Titanium.UI.createImageView({width:96,height:60,left:0,bottom:0});
        letterImage.image = letters[i].image;
        letterImage.add(letterText);
        
        letterView.add(letterImage);
        scrollView.add(letterView);
        letterImage.url = letters[i].url;
        letterImage.addEventListener('click',function(e)
	    { 
	       quickview.show(e.source.url);
	    });
    
    }
   
    
    mainView.add(scrollView);
},
getLetters:function()
{
	var letters = new Array();
	
	var letter1 = new Object();
	letter1.image = "images/newsletter.png";
	letter1.name = "2012 Q3 Newsletter";
	letter1.url = "http://www.roomtoread.org/page.aspx?pid=1392";
	letters.push(letter1);
	
	var letter2 = new Object();
	letter2.image = "images/newsletter.png";
	letter2.name = "2012 Q2 Newsletter";
	letter2.url = "http://www.roomtoread.org/page.aspx?pid=1299";
	letters.push(letter2);

	var letter3 = new Object();
	letter3.image = "images/newsletter.png";
	letter3.name = "2012 Q1 Newsletter";
	letter3.url = "http://www.roomtoread.org/page.aspx?pid=1256";
	letters.push(letter3);

	var letter = new Object();
	letter.image = "images/newsletter.png";
	letter.name = "2011 Q4 Newsletter";
	letter.url = "http://www.roomtoread.org/page.aspx?pid=1170";
	letters.push(letter);

	var letter = new Object();
	letter.image = "images/newsletter.png";
	letter.name = "2011 Q3 Newsletter";
	letter.url = "http://www.roomtoread.org/page.aspx?pid=1067";
	letters.push(letter);

	var letter = new Object();
	letter.image = "images/newsletter.png";
	letter.name = "2011 Q2 Newsletter";
	letter.url = "http://www.roomtoread.org/page.aspx?pid=964";
	letters.push(letter);

	var letter = new Object();
	letter.image = "images/newsletter.png";
	letter.name = "2011 Q1 Newsletter";
	letter.url = "http://www.roomtoread.org/page.aspx?pid=904";
	letters.push(letter);

	var letter = new Object();
	letter.image = "images/newsletter.png";
	letter.name = "2010 Q4 Newsletter";
	letter.url = "http://www.roomtoread.org/page.aspx?pid=797";
	letters.push(letter);

	var letter = new Object();
	letter.image = "images/newsletter.png";
	letter.name = "2010 Q3 Newsletter";
	letter.url = "http://www.roomtoread.org/page.aspx?pid=735";
	letters.push(letter);

	var letter = new Object();
	letter.image = "images/newsletter.png";
	letter.name = "2010 Q2 Newsletter";
	letter.url = "http://www.roomtoread.org/page.aspx?pid=677";
	letters.push(letter);

    var letter = new Object();
	letter.image = "images/newsletter.png";
	letter.name = "2010 Q1 Newsletter";
	letter.url = "http://www.roomtoread.org/page.aspx?pid=635";
	letters.push(letter);
	
	return letters;
},
attachEvents:function(bookView)
{
	var counter = 0; 
	
	bookView.addEventListener('dblclick',function(e)
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