var screenshot = {
  content : document.createElement("canvas"),
  data : '',

  init : function() {
    this.initEvents();
  },
 saveScreenshot : function() {
    var image = new Image();
    image.onload = function() {
      var canvas = screenshot.content;
      canvas.width = image.width;
      canvas.height = image.height;
      var context = canvas.getContext("2d");
      context.drawImage(image,0,0);

      // save the image
      var link = document.createElement('a');
      link.download = "TaboolaPreview.png";
      link.href = screenshot.content.toDataURL();
      link.click();
      screenshot.data = '';
    };
    image.src = screenshot.data; 
  },
initEvents : function() {
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting === "screenshot request sent") {
          chrome.tabs.captureVisibleTab(null, {format : "png"}, function(data) {
                screenshot.data = data;
                screenshot.saveScreenshot();

            }); 

        }
    });
  }
};
screenshot.init();

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    	if(request.greeting == "script request sent"){
    		var data = request.data;
    		var json = JSON.stringify(data);
    		console.log(json);
			var file = new File([data] , {type: "text/plain"});
			var url = URL.createObjectURL(file);
			chrome.downloads.download({
			  url: url // The object URL can be used as download URL
			  //...
			});
		}
	});