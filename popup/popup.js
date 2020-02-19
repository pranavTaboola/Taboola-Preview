document.addEventListener('DOMContentLoaded', function() {

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//-----------video section-------------//

	document.getElementById('video_height').addEventListener('click', function() {	
		var v_height = document.getElementById('height_val');
		video(v_height.value,'height','video');
	});

		document.getElementById('video_length').addEventListener('click', function() {	
		var v_length = document.getElementById('length_val');
		video(v_length.value,'length','video');
	});

		document.getElementById('video_z').addEventListener('click', function() {	
		var v_zindex = document.getElementById('z_val');
		video(v_zindex.value,'z-index','video');
	});

		document.getElementById('video_size').addEventListener('click', function() {	
		var v_zindex = document.getElementById('size_val');
		video(v_zindex.value,'size','video');
	});		

	function video(v,m,t){

	    	let params = {
			active: true,
			currentWindow: true
			}

			chrome.tabs.query(params, gotTabs);

			function gotTabs(tabs){

				let data = {
							"type":t,
							"selection":m,
							"value":v
							};

				chrome.tabs.sendMessage(tabs[0].id,data);
			}

	}

//-----------next-up section-------------//

	document.getElementById('n_height').addEventListener('click', function() {	
		var n_height = document.getElementById('n_height_val');
		next_up(n_height.value,'height','next-up');
	});

	document.getElementById('n_left').addEventListener('click', function() {	
		var n_left = document.getElementById('n_left_val');
		next_up(n_left.value,'left','next-up');
	});

	document.getElementById('n_size').addEventListener('click', function() {	
		var n_size = document.getElementById('n_size_val');
		next_up(n_size.value,'size','next-up');
	}); 

	document.getElementById('n_font_size').addEventListener('click', function() {	
		var n_font_size = document.getElementById('n_font_size_val');
		next_up(n_font_size.value,'font_size','next-up');
	});

		document.getElementById('n_font_color').addEventListener('click', function() {	
		var n_font_color = document.getElementById('n_font_color_val');
		next_up(n_font_color.value,'font_color','next-up');
	});

		function next_up(v,m,t){

	    	let params = {
			active: true,
			currentWindow: true
			}

			chrome.tabs.query(params, gotTabs);

			function gotTabs(tabs){

				let data = {
							"type":t,
							"selection":m,
							"value":v
							};

				chrome.tabs.sendMessage(tabs[0].id,data);
			}

	}

//-----------feed section-------------//

		document.getElementById('feed_header_padding').addEventListener('click', function() {	
		var feed_header_padding = document.getElementById('feed_header_padding_val');
		feed(feed_header_padding.value,'header_padding','feed');
	});

		document.getElementById('feed_header_color').addEventListener('click', function() {	
		var feed_header_color = document.getElementById('feed_header_color_val');
		feed(feed_header_color.value,'header_color','feed');
	});

		document.getElementById('feed_header_margin').addEventListener('click', function() {	
		var feed_header_margin = document.getElementById('feed_header_margin_val');
		feed(feed_header_margin.value,'header_margin','feed');
	});

		document.getElementById('feed_title_color').addEventListener('click', function() {	
		var feed_title_color = document.getElementById('feed_title_color_val');
		feed(feed_title_color.value,'title_color','feed');
	});

		document.getElementById('feed_title_font').addEventListener('click', function() {	
		var feed_title_font = document.getElementById('feed_title_font_val');
		feed(feed_title_font.value,'title_font','feed');
	});

		document.getElementById('feed_title_margin').addEventListener('click', function() {	
		var feed_title_margin = document.getElementById('feed_title_margin_val');
		feed(feed_title_margin.value,'title_margin','feed');
	});

		document.getElementById('feed_branding_font').addEventListener('click', function() {	
		var feed_branding_font = document.getElementById('feed_branding_font_val');
		feed(feed_branding_font.value,'branding_font','feed');
	});

		document.getElementById('feed_branding_margin').addEventListener('click', function() {	
		var feed_branding_margin = document.getElementById('feed_branding_margin_val');
		feed(feed_branding_margin.value,'branding_margin','feed');
	});

		document.getElementById('feed_ratio').addEventListener('click', function() {	
		var feed_ratio = document.getElementById('feed_ratio_val');
		feed(feed_ratio.value,'feed_ratio','feed');
	});

		document.getElementById('feed_border').addEventListener('click', function() {	
		var feed_border = document.getElementById('feed_border_val');
		feed(feed_border.value,'feed_border','feed');
	});

			function feed(v,m,t){

	    	let params = {
			active: true,
			currentWindow: true
			}

			chrome.tabs.query(params, gotTabs);

			function gotTabs(tabs){

				let data = {
							"type":t,
							"selection":m,
							"value":v
							};

				chrome.tabs.sendMessage(tabs[0].id,data);
			}

	}

//-----------------widget------------------//

		var dis = document.getElementById("w_name_val");
   		var sel = document.querySelectorAll(".dis");
			for (var i = 0; i < sel.length; ++i) {
				sel[i].disabled = true;
		}

		dis.onchange = function () {
		if (this.value.length > 0) {
   			var sel = document.querySelectorAll(".dis");
   			for (var i = 0; i < sel.length; ++i) {
      			sel[i].disabled = false;
   			}
		}
	}


		document.getElementById('w_header_margin').addEventListener('click', function() {	
		var w_hea_margin = document.getElementById('w_header_margin_val');
		var w_name = document.getElementById('w_name_val');
		widget(w_hea_margin.value,w_name.value,'header_margin','widget');
	});

		document.getElementById('w_header_padding').addEventListener('click', function() {	
		var w_hea_padding = document.getElementById('w_header_padding_val');
		var w_name = document.getElementById('w_name_val');
		widget(w_hea_padding.value,w_name.value,'header_padding','widget');
	});

		document.getElementById('w_header_color').addEventListener('click', function() {	
		var w_hea_color = document.getElementById('w_header_color_val');
		var w_name = document.getElementById('w_name_val');
		widget(w_hea_color.value,w_name.value,'header_color','widget');
	});

		document.getElementById('w_header_font').addEventListener('click', function() {	
		var w_hea_font = document.getElementById('w_header_font_val');
		var w_name = document.getElementById('w_name_val');
		widget(w_hea_font.value,w_name.value,'header_font','widget');
	});

		document.getElementById('w_thumb_width').addEventListener('click', function() {	
		var w_thumb_width = document.getElementById('w_thumb_width_val');
		var w_name = document.getElementById('w_name_val');
		widget(w_thumb_width.value,w_name.value,'thumbnails_width','widget');
	});

		document.getElementById('w_thumb_margin').addEventListener('click', function() {	
		var w_thumb_margin = document.getElementById('w_thumb_margin_val');
		var w_name = document.getElementById('w_name_val');
		widget(w_thumb_margin.value,w_name.value,'thumbnails_margin','widget');
	});

		document.getElementById('w_thumb_padding').addEventListener('click', function() {	
		var w_thumb_padding = document.getElementById('w_thumb_padding_val');
		var w_name = document.getElementById('w_name_val');
		widget(w_thumb_padding.value,w_name.value,'thumbnails_padding','widget');
	});

		document.getElementById('w_title_font').addEventListener('click', function() {	
		var w_title_font = document.getElementById('w_title_font_val');
		var w_name = document.getElementById('w_name_val');
		widget(w_title_font.value,w_name.value,'title_font','widget');
	});

		document.getElementById('w_title_font_color').addEventListener('click', function() {	
		var w_title_font_color = document.getElementById('w_title_font_color_val');
		var w_name = document.getElementById('w_name_val');
		widget(w_title_font_color.value,w_name.value,'title_font_color','widget');
	});

		document.getElementById('w_title_branding_height').addEventListener('click', function() {	
		var w_title_height = document.getElementById('w_title_branding_height_val');
		var w_name = document.getElementById('w_name_val');
		widget(w_title_height.value,w_name.value,'title_branding_height','widget');
	});	

		document.getElementById('w_title_margin').addEventListener('click', function() {	
		var w_title_margin = document.getElementById('w_title_margin_val');
		var w_name = document.getElementById('w_name_val');
		widget(w_title_margin.value,w_name.value,'title_margin','widget');
	});	

		document.getElementById('w_branding_color').addEventListener('click', function() {	
		var w_title_margin = document.getElementById('w_branding_color_val');
		var w_name = document.getElementById('w_name_val');
		widget(w_title_margin.value,w_name.value,'branding_color','widget');
	});	

		document.getElementById('w_branding_font').addEventListener('click', function() {	
		var w_title_margin = document.getElementById('w_branding_font_val');
		var w_name = document.getElementById('w_name_val');
		widget(w_title_margin.value,w_name.value,'branding_font','widget');
	});		

			function widget(v,w,m,t){

	    	let params = {
			active: true,
			currentWindow: true
			}

			chrome.tabs.query(params, gotTabs);

			function gotTabs(tabs){

				let data = {
							"type":t,
							"name":w,
							"selection":m,
							"value":v
							};

				chrome.tabs.sendMessage(tabs[0].id,data);
			}

	}


//------------------------Read more Configurations ----------------------------------//


		document.getElementById('read_height').addEventListener('click', function() {	
		var read_height = document.getElementById('read_height_val');
		read_more(read_height.value,'read_height','read-more');
	});

		document.getElementById('read_width').addEventListener('click', function() {	
		var read_width = document.getElementById('read_width_val');
		read_more(read_width.value,'read_width','read-more');
	});

		document.getElementById('read_border').addEventListener('click', function() {	
		var read_border = document.getElementById('read_border_val');
		read_more(read_border.value,'read_border','read-more');
	});

		document.getElementById('read_font').addEventListener('click', function() {	
		var read_font = document.getElementById('read_font_val');
		read_more(read_font.value,'read_font','read-more');
	});

		document.getElementById('read_font_color').addEventListener('click', function() {	
		var read_font_color = document.getElementById('read_font_color_val');
		read_more(read_font_color.value,'read_font_color','read-more');
	});	

		document.getElementById('read_background').addEventListener('click', function() {	
		var read_background = document.getElementById('read_background_val');
		read_more(read_background.value,'read_background','read-more');
	});				

			function read_more(v,m,t){

	    	let params = {
			active: true,
			currentWindow: true
			}

			chrome.tabs.query(params, gotTabs);

			function gotTabs(tabs){

				let data = {
							"type":t,
							"selection":m,
							"value":v
							};

				chrome.tabs.sendMessage(tabs[0].id,data);
			}

	}

//-------------------------Explore More-------------------//

		document.getElementById('explore_padding').addEventListener('click', function() {	
		var explore_padding = document.getElementById('explore_padding_val');
		explore_more(explore_padding.value,'padding','explore-more');
	});	

		document.getElementById('explore_margin').addEventListener('click', function() {	
		var explore_margin = document.getElementById('explore_margin_val');
		explore_more(explore_margin.value,'margin','explore-more');
	});

		document.getElementById('explore_background').addEventListener('click', function() {	
		var explore_background = document.getElementById('explore_background_val');
		explore_more(explore_background.value,'background','explore-more');
	});

		document.getElementById('explore_pop_up_text').addEventListener('click', function() {	
		var explore_pop_up_text = document.getElementById('explore_pop_up_text_val');
		explore_more(explore_pop_up_text.value,'pop_up_text','explore-more');
	});		

		document.getElementById('explore_pop_up_background').addEventListener('click', function() {	
		var explore_pop_up_background = document.getElementById('explore_pop_up_background_val');
		explore_more(explore_pop_up_background.value,'pop_up_background','explore-more');
	});

		document.getElementById('explore_pop_up_margin').addEventListener('click', function() {	
		var explore_pop_up_margin = document.getElementById('explore_pop_up_margin_val');
		explore_more(explore_pop_up_margin.value,'pop_up_margin','explore-more');
	});		

			function explore_more(v,m,t){

	    	let params = {
			active: true,
			currentWindow: true
			}

			chrome.tabs.query(params, gotTabs);

			function gotTabs(tabs){

				let data = {
							"type":t,
							"selection":m,
							"value":v
							};

				chrome.tabs.sendMessage(tabs[0].id,data);
			}

	}

		document.getElementById('screenshot').addEventListener('click', function() {	
		screenshot('take','screenshot','screenshot');
	});	

			function screenshot(v,m,t){

	    	let params = {
			active: true,
			currentWindow: true
			}

			chrome.tabs.query(params, gotTabs);

			function gotTabs(tabs){

				let data = {
							"type":t,
							"selection":m,
							"value":v
							};

				chrome.tabs.sendMessage(tabs[0].id,data);
			}

	}

			document.getElementById('script').addEventListener('click', function() {
			var values = document.getElementsByClassName('text_box');
			var keys = document.getElementsByClassName('text_btn');
			var jsonObj = {};
			for (var i = 0 ; i < values.length; ++i) {
				if(values[i].value !== ""){
			    jsonObj[keys[i].value] = values[i].value;
			    }
			}

			Script(JSON.stringify(jsonObj),'script','script');
	});	



			function Script(v,m,t){

	    	let params = {
			active: true,
			currentWindow: true
			}

			chrome.tabs.query(params, gotTabs);

			function gotTabs(tabs){

				let data = {
							"type":t,
							"selection":m,
							"value":v
							};

				chrome.tabs.sendMessage(tabs[0].id,data);
			}

	}

});









