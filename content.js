var timer;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {


	switch(true){

		case request.type ==  'video':
		console.clear();

		if(timer){
			clearInterval(timer);			
		}
		timer = setInterval(function(){ video(request.type,request.selection,request.value); }, 1);
		break;

		case request.type == 'next-up':
		console.clear();
		next(request.type,request.selection,request.value);
		break;

		case request.type == 'feed':
		console.clear();
		feed(request.type,request.selection,request.value);
		break;

		case request.type == 'widget':
		console.clear();
		widget(request.type,request.name,request.selection,request.value);
		break;

		case request.type == 'read-more':
		console.clear();
		read_more(request.type,request.selection,request.value);
		break;

		case request.type == 'explore-more':
		console.clear();
		explore_more(request.type,request.selection,request.value);
		break;

		case request.type == 'screenshot':
		console.clear();
		screenshot(request.type,request.selection,request.value);
		break;

		case request.type == 'script':
		console.clear();
		script(request.type,request.selection,request.value);
		break;

	}

	function video(t,s,v){
	//video
			if(!document.getElementsByClassName('_cm-ad-active')[0] && !document.getElementsByClassName('_cm-os-slider')[0]){
				return;
			}

			else if(document.getElementsByClassName('_cm-ad-active')[0]){ //feed slider

				switch(true){

					case s == 'height':
					document.getElementsByClassName('_cm-ad-active')[0].style.cssText="margin-bottom: "+ v +"px;background-color: transparent;position: fixed;top: auto;left: auto;right: 0px;bottom: 0px;width: 400px;height: 225px;transition: none 0s ease 0s;z-index: 999 !important;";
					document.getElementById('_cm-close-area').style.cssText="display: none;"
					document.getElementsByClassName('_cm-volume-border')[0].style.cssText="display: none;";
					break;

					case s == 'length':
					document.getElementsByClassName('_cm-ad-active')[0].style.cssText="background-color: transparent;position: fixed;top: auto;left: auto;right: "+ v +"px;bottom: 0px;width: 400px;height: 225px;transition: none 0s ease 0s;z-index: 999 !important;";
					document.getElementById('_cm-close-area').style.cssText="display: none;"
					document.getElementsByClassName('_cm-volume-border')[0].style.cssText="display: none;";					
					break;

					case s == 'z-index':
					document.getElementsByClassName('_cm-ad-active')[0].style.cssText="background-color: transparent;position: fixed;top: auto;left: auto;right: 0px;bottom: 0px;width: 400px;height: 225px;transition: none 0s ease 0s;z-index: "+ v +" !important;";
					document.getElementById('_cm-close-area').style.cssText="display: none;"
					document.getElementsByClassName('_cm-volume-border')[0].style.cssText="display: none;";					
					break;

					case s == 'size':
					document.getElementsByClassName('_cm-ad-active')[0].style.cssText="background-color: transparent;position: fixed;top: auto;left: auto;right: 0px;bottom: 0px;width: "+ v +"px;height: "+ parseInt(v)/1.7 +"px;transition: none 0s ease 0s;z-index: 999 !important;";
					document.getElementById('_cm-close-area').style.cssText="display: none;"
					document.getElementsByClassName('_cm-volume-border')[0].style.cssText="display: none;";					
					break;
				}	
			}
			else if(document.getElementsByClassName('_cm-os-slider')[0]){ //slider tag

				document.getElementsByClassName('_cm-os-slider')[0].style.cssText="text-align: left;top: auto;bottom: "+ v +"px;left: auto;right: 0px;width: 400px;height: 225px;transition: right 1s ease 0s, left 1s ease 0s !important;";	
			}
	}

	function next(t,s,v){
		//next-up
				switch(true){

					case s == 'size':
					document.getElementById('tbl-next-up').style.width= v+'px';
					break;

					case s == 'height':
					document.getElementById('tbl-next-up').style.bottom= v+'px';
					break;

					case s == 'left':
					document.getElementById('tbl-next-up').style.left= v+'px';
					break;		

					case s == 'font_size':
						if(document.querySelectorAll('.blend-next-up-a .video-title')){
							var nf =document.querySelectorAll('.blend-next-up-a .video-title'),i;
							for (i = 0; i < nf.length; ++i) {
				  					nf[i].style.fontSize = v + 'px';
								}
						}else{
							var nf =document.querySelectorAll('.next-up-a .video-title'),i;
							for (i = 0; i < nf.length; ++i) {
				  					nf[i].style.fontSize = v + 'px';
								}
						}
					break;	

					case s == 'font_color':
						if(document.querySelectorAll('.blend-next-up-a .video-title')){
							var nc =document.querySelectorAll('.blend-next-up-a .video-title'),i;
							for (i = 0; i < nc.length; ++i) {
				  					nc[i].style.color = v;
								}
						}else{
							var nc =document.querySelectorAll('.next-up-a .video-title'),i;
							for (i = 0; i < nc.length; ++i) {
				  					nc[i].style.color = v;
								}
						}
					break;	
									
				}
	}

	function feed(t,s,v){
	//feed
				switch(true){

					case s == 'header_padding':
					document.getElementsByClassName('tbl-feed-header')[0].style.padding = v;
					break;	

					case s == 'header_color':
					document.getElementsByClassName('tbl-feed-header')[0].style.backgroundColor = v;
					break;

					case s == 'header_margin':
					document.getElementsByClassName('tbl-feed-header')[0].style.margin = v;
					break;	

					case s == 'title_color':
					var tc = document.querySelectorAll('.videoCube .video-label-box .video-title'),i;
					for (i = 0; i < tc.length; ++i) {
	  					tc[i].style.color = v; 
					}
					break;	

					case s == 'title_font':
					var tf = document.querySelectorAll('.videoCube .video-label-box .video-title'),i;
					for (i = 0; i < tf.length; ++i) {
	  					tf[i].style.fontSize = v+'px';
					}
					break;

					case s == 'title_margin':
					var tm = document.querySelectorAll('.videoCube .video-label-box .video-title'),i;
					for (i = 0; i < tm.length; ++i) {
	  					tm[i].style.margin = v;
					}
					break;

					case s == 'branding_font':
					var bf = document.querySelectorAll('.videoCube .video-label-box .branding.composite-branding'),i;
					for (i = 0; i < bf.length; ++i) {
  						bf[i].style.fontSize = v+'px';
					}
					break;

					case s == 'branding_margin':
					var bm = document.querySelectorAll('.videoCube .video-label-box .branding.composite-branding'),i;
					for (i = 0; i < bm.length; ++i) {
	  					bm[i].style.margin = v;
					}
					break;

					case s == 'feed_ratio':
					var fr = document.querySelectorAll('.videoCube_aspect'),i;
					for (i = 0; i < fr.length; ++i) {
	  					fr[i].style.padding = v;
					}
					break;

					case s == 'feed_border':
					document.querySelectorAll('.trc_related_container.trc_spotlight_widget.tbl-feed-container.tbl-feed-frame-DIVIDER.render-late-effect')[0].style.padding = v;
					break;

				}

	}


	function widget(t,w,s,v){

					switch(true){

					case s == 'header_margin':
					var hm = document.querySelectorAll('.'+ w + ' .trc_rbox_header'),i;
					for (i = 0; i < hm.length; ++i) {
	  					hm[i].style.margin = v;
					}
					break;

					case s == 'header_padding':
					var hp = document.querySelectorAll('.'+ w + ' .trc_rbox_header'),i;
					for (i = 0; i < hp.length; ++i) {
	  					hp[i].style.padding = v;
					}
					break;

					case s == 'header_color':
					var hc = document.querySelectorAll('.'+ w + ' .trc_rbox_header'),i;
					for (i = 0; i < hc.length; ++i) {
	  					hc[i].style.backgroundColor = v;
					}
					break;

					case s == 'header_font':
					var hf = document.querySelectorAll('.'+ w + ' .trc_rbox_header'),i;
					for (i = 0; i < hf.length; ++i) {
	  					hf[i].style.fontSize = v + 'px';
					}
					break;

					case s == 'thumbnails_width':
					var tw = document.querySelectorAll('.'+ w + ' .videoCube'),i;
					for (i = 0; i < tw.length; ++i) {
	  					tw[i].style.width = v + '%';
					}
					break;

					case s == 'thumbnails_margin':
					var tm = document.querySelectorAll('.'+ w + ' .videoCube'),i;
					for (i = 0; i < tm.length; ++i) {
	  					tm[i].style.margin = v;
					}
					break;

					case s == 'thumbnails_padding':
					var tp = document.querySelectorAll('.'+ w + ' .videoCube'),i;
					for (i = 0; i < tp.length; ++i) {
	  					tp[i].style.padding = v;
					}					
					break;

					case s == 'title_font':
					var tf = document.querySelectorAll('.'+ w + ' .video-title'),i;
					for (i = 0; i < tf.length; ++i) {
	  					tf[i].style.fontSize = v + 'px';
					}					
					break;

					case s == 'title_font_color':
					var tc = document.querySelectorAll('.'+ w + ' .video-title'),i;
					for (i = 0; i < tc.length; ++i) {
	  					tc[i].style.color = v;
					}					
					break;

					case s == 'title_branding_height':
					var th = document.querySelectorAll('.'+ w + ' .video-title'),i;
					for (i = 0; i < th.length; ++i) {
	  					th[i].style.maxHeight = v + 'px';
					}					
					break;	

					case s == 'title_margin':
					var tm = document.querySelectorAll('.'+ w + ' .video-title'),i;
					for (i = 0; i < tm.length; ++i) {
	  					tm[i].style.margin = v;
					}					
					break;		

					case s == 'branding_color':
					var bc = document.querySelectorAll('.'+ w + ' .branding'),i;
					for (i = 0; i < bc.length; ++i) {
	  					bc[i].style.color = v;
					}					
					break;	

					case s == 'branding_font':
					var bf = document.querySelectorAll('.'+ w + ' .branding'),i;
					for (i = 0; i < bf.length; ++i) {
	  					bf[i].style.fontSize = v + 'px';
					}					
					break;	



				}
	}


	function read_more(t,s,v){

					switch(true){

					case s == 'read_height':
					document.getElementsByClassName('tbl-read-more-btn')[0].style.cssText="display: inline-block !important;margin: 48px 0 28px !important;line-height: 38px !important;text-align: center !important;white-space: nowrap !important;vertical-align: middle !important;cursor: pointer !important;touch-action: manipulation;color: #326891 !important;background: #edf2f5 none !important;border: 1px solid #93abbc !important;height: "+ v +"px !important;width: 250px !important;font-size: 15px !important;font-weight: bold !important;border-radius: 3px !important;font-family: sans-serif !important;";					
					break;

					case s == 'read_width':
					document.getElementsByClassName('tbl-read-more-btn')[0].style.cssText="display: inline-block !important;margin: 48px 0 28px !important;line-height: 38px !important;text-align: center !important;white-space: nowrap !important;vertical-align: middle !important;cursor: pointer !important;touch-action: manipulation;color: #326891 !important;background: #edf2f5 none !important;border: 1px solid #93abbc !important;height: 38px !important;width: "+ v +"px !important;font-size: 15px !important;font-weight: bold !important;border-radius: 3px !important;font-family: sans-serif !important;";
					break;

					case s == 'read_border':
					document.getElementsByClassName('tbl-read-more-btn')[0].style.cssText="display: inline-block !important;margin: 48px 0 28px !important;line-height: 38px !important;text-align: center !important;white-space: nowrap !important;vertical-align: middle !important;cursor: pointer !important;touch-action: manipulation;color: #326891 !important;background: #edf2f5 none !important;border: "+ v +" !important;height: 38px !important;width: 250px !important;font-size: 15px !important;font-weight: bold !important;border-radius: 3px !important;font-family: sans-serif !important;";
					break;

					case s == 'read_font':
					document.getElementsByClassName('tbl-read-more-btn')[0].style.cssText="display: inline-block !important;margin: 48px 0 28px !important;line-height: 38px !important;text-align: center !important;white-space: nowrap !important;vertical-align: middle !important;cursor: pointer !important;touch-action: manipulation;color: #326891 !important;background: #edf2f5 none !important;border: 1px solid #93abbc !important;height: 38px !important;width: 250px !important;font-size: "+ v +"px !important;font-weight: bold !important;border-radius: 3px !important;font-family: sans-serif !important;";
					break;	

					case s == 'read_font_color':
					document.getElementsByClassName('tbl-read-more-btn')[0].style.cssText="display: inline-block !important;margin: 48px 0 28px !important;line-height: 38px !important;text-align: center !important;white-space: nowrap !important;vertical-align: middle !important;cursor: pointer !important;touch-action: manipulation;color: "+ v +" !important;background: #edf2f5 none !important;border: 1px solid #93abbc !important;height: 38px !important;width: 250px !important;font-size: 15px !important;font-weight: bold !important;border-radius: 3px !important;font-family: sans-serif !important;";
					break;

					case s == 'read_background':
					document.getElementsByClassName('tbl-read-more-btn')[0].style.cssText="display: inline-block !important;margin: 48px 0 28px !important;line-height: 38px !important;text-align: center !important;white-space: nowrap !important;vertical-align: middle !important;cursor: pointer !important;touch-action: manipulation;color: #326891 !important;background: "+ v +" none !important;border: 1px solid #93abbc !important;height: 38px !important;width: 250px !important;font-size: 15px !important;font-weight: bold !important;border-radius: 3px !important;font-family: sans-serif !important;";
					break;
					
				}
	}

	function explore_more(t,s,v){

					switch(true){

					case s == 'margin':
					var e = document.getElementById("tbl-explore-more-container").childNodes[0];
					e.style.margin = v;
					break;

					case s == 'padding':
					var e = document.getElementById("tbl-explore-more-container").childNodes[0];
					e.style.padding = v;
					break;

					case s == 'background':
					var e = document.getElementById("tbl-explore-more-container").childNodes[0];
					e.style.backgroundColor = v;
					break;	

					case s == 'pop_up_text':
					document.getElementsByClassName('tbl-explore-more-popup-text')[0].innerText = v;				
					break;

					case s == 'pop_up_background':
					document.querySelectorAll('.tbl-explore-more-popup.tbl-explore-more-popup-show')[0].style.backgroundColor = v;				
					break;

					case s == 'pop_up_margin':
					document.querySelectorAll('.tbl-explore-more-popup.tbl-explore-more-popup-show')[0].style.margin = v;				
					break;


					}
	}

	function screenshot(t,s,v){

					if(s == 'screenshot'){
					chrome.runtime.sendMessage({greeting: "screenshot request sent"}, function(response) {
					  });
				}
	}

	function script(t,s,v){
					chrome.runtime.sendMessage({greeting: "script request sent",data: v}, function(response) {
					  });
	}

});


    




