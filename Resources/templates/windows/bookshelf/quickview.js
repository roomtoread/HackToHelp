var quickview = {

show: function (path)
{
  var buttonView = Titanium.UI.createView({
		backgroundImage:'images/bar.png',height:50,top:0,
  });
  var quickView =  Titanium.UI.createWindow({ 
  	  backgroundColor:'red', width:340,height:480,align:'center' 
  });
  var done = Titanium.UI.createButtonBar({
        labels:["Close"],
        backgroundColor:'#cb9a53',
        style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
		height:35,width:60,top:11,right:20
  });
  done.addEventListener('click', function()
  {
     quickView.close();
  });
  
  buttonView.add(done);
  quickView.add(buttonView);
  
  var webview =  Titanium.UI.createWebView({ 
  	  backgroundColor:'#fff', width:340,height:443,align:'center', top:47
  });
  quickView.add(webview);
  webview.url = path;
  quickView.open();
  
},



}