// Website JS

$(document).ready(function(){

// social icon & navigation logo hover effects
$(".social_icons_wrapper a, .meet_team_social_icons a, a.navigation_logo").fadeTo("fast", 1.0);
$(".social_icons_wrapper a, .meet_team_social_icons a, a.navigation_logo").hover(function(){
	$(this).fadeTo("fast", 0.6);
},function(){
	$(this).fadeTo("fast", 1.0);
});


// Mobile navigation
$('a.mobile_nav_icon').click(function() {
	$('.navigation_links').fadeToggle(300);
});

onWindowResize = function() {
	if ($(window).width() < 1200) {
		$('.header_wrapper').addClass('header_wrapper_mobile');
		$('#features').css({
			'background-image': 'none'
		});
		$('.header_iphones_wrapper').css({
			'margin-left': 'auto'
		});
	} else {
		$('.header_iphones_wrapper').css({
			'margin-left': $(window).width() > 1470 ? '33%' : '38%'
		});
		$('.header_wrapper').removeClass('header_wrapper_mobile');
		$('#features').css({
			'background-image': 'url(/static/images/hermes-web-bg2.png)'
		})
	}
}

$('.navigation_links.mobile_nav_wrapper a').click(function() {
	$('.navigation_links').hide();
});

$('.navigation_links.mobile_nav_wrapper a').click(function() {
	$('.navigation_links').hide();
});

});

var toggleModal = function(toShow) {
	$('#myModal').modal('show')
}

var directToHermes = function() {
	goog_report_conversion('https://hermes.social/trial');
}

// Header Animations

$(window).bind("load", function() {

	$(".loading_icon").fadeOut(400);

	setTimeout(function(){
		$(".header_text_wrapper").fadeIn(300);
	}, 500);

	setTimeout(function(){
		$(".header_iphone_one").show().addClass('animated fadeInUpBig');
	}, 800);

	setTimeout(function(){
		$(".header_iphone_two").show().addClass('animated fadeInUpBig');
	}, 1200);

	setTimeout(function(){
		$(".header_iphone_three").show().addClass('animated fadeInUpBig');
	}, 1500);

	setTimeout(function(){
		$(".header_iphone_one, .header_iphone_two, .header_iphone_three").removeClass('animated fadeInUpBig');
	}, 2500);

	$(document).ready(function() {
		onWindowResize();
	});

});



// Adwords conversion tracking stuff
goog_snippet_vars = function() {
  var w = window;
  w.google_conversion_id = 863472388;
  w.google_conversion_label = "ve1-CKyhmW0QhJbemwM";
  w.google_remarketing_only = false;
}
goog_report_conversion = function(url) {
  goog_snippet_vars();
  window.google_conversion_format = "3";
  var opt = new Object();
  opt.onload_callback = function() {
	  if (typeof(url) != 'undefined') {
	    window.location = url;
	  }
	}
	var conv_handler = window['google_trackConversion'];
	if (typeof(conv_handler) == 'function') {
	  conv_handler(opt);
	}
}
