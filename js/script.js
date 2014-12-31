		
	'use strict';
	//Check IE11
	function IEVersion() {
 		if (!!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 11;
		}
	}
		
	// Preloader
	//==================================================================================
	if( !device.tablet() && !device.mobile() ) {
		
		$(document).ready(function () {
		
			$('#logo, #slide_content').css({
				visibility: 'hidden'
			});
		
    		$("body").queryLoader2({
        		barColor: "#b06c8b",
        		percentage: true,
        		barHeight: 6,
        		completeAnimation: "grow",
				overlayId: "preloader",
				minimumTime: 1000,
				onComplete: function()
				{
					
					// WayPoint
					//====================================================
					$('.animation').css({
						visibility: 'hidden'
					});	
	
					$('.animation').waypoint(function() {
						$(this).css({ visibility: 'visible' });
 						$(this).addClass('animated');
						}, {
							offset: '95%'
					});
					
					// Hide Preloader
					//====================================================
					$("#start_preloader").fadeOut("fast", function(){
                   		$(this).remove();
                	}); 
					
					// Animate Logo and Slide Text
					//====================================================
					$('#logo, #slide_content').css({visibility: 'visible'});
					$("#logo").addClass("animated fadeInDown");
					$("#slide_content").addClass("animated delay1 fadeInRight");
					
				}
    		});
		});	
	}
	else
	{
		
		$('#logo, #slide_content').css({
			visibility: 'hidden'
		});
		
		window.addEventListener("DOMContentLoaded", function() {	
		
    		$("body").queryLoader2({
        		barColor: "#00c0b6",
        		percentage: true,
        		barHeight: 6,
        		completeAnimation: "fade",
				overlayId: "preloader",
				minimumTime: 1000,
				onComplete: function()
				{	
					// Hide Preloader
					//====================================================
					$("#start_preloader").fadeOut("fast", function(){
                   		$(this).remove();
                	}); 
					
					// Animate Logo and Slide Text
					//====================================================
					$('#logo, #slide_content').css({visibility: 'visible'});
					//$("#logo").addClass("animated fadeInDown");
					//$("#slide_content").addClass("animated delay1 fadeInRight");
				}
    		});
		});
	}

	// Supersized Slider
	//==================================================================================
	jQuery(function($){
		$.supersized({
			slides  :  	
			[ 
				{	image : 'images/cover_b.jpg' },
				{	image : 'images/cover_c.jpg' },
                {	image : 'images/cover.jpg' }
			]
		});
	});
	
	
	jQuery(document).ready(function($){
   		var deviceAgent = navigator.userAgent.toLowerCase();
   		var is_apple_device = deviceAgent.match(/(iphone|ipod|ipad)/);
    	if (is_apple_device) {
			$("#supersized, #supersized li").css("position","absolute");
   	 	}
	});	

	// Sticky
	//==================================================================================
	$(document).ready(function(){
		$("#logo").sticky({ topSpacing: 0 });
		$("#nav").sticky({ topSpacing: 0 });
	});

	// One Page Nav
	//==================================================================================
	$(document).ready(function() {
		$('#nav_list').onePageNav({
    		scrollSpeed: 1200,
    		currentClass: 'active',
    		changeHash: true,
    		filter: ':not(.external)'
		});
	});
	
	// Responsive Nav Hack. Hide Menu After Click It
	//==================================================================================
	$(document).ready(function() {
		var navMain = $(".navbar-collapse");
        navMain.on("click", "a", null, function () {
            if ($(this).attr("href") !== "#") {
                navMain.collapse('hide');
            }
        });
	});
	
	// NiceScroll
	//==================================================================================
	$(document).ready(function() {
		if (IEVersion() != 11) 
		{
			$('html').niceScroll({
    			cursorcolor: "#1A212C",
    			zindex: '99999',
    			cursorminheight: 60,
    			scrollspeed: 80,
    			cursorwidth: 7,
    			autohidemode: true,
    			background: "#aaa",
    			cursorborder: 'none',
    			cursoropacitymax: .7,
    			cursorborderradius: 0,
    			horizrailenabled: false
			});
		}
		
	});
	
	// Photo Divider - Scroll Background Attachment - IE11 
	//==================================================================================
	$(document).ready(function() {
		if (IEVersion() == 11) 
		{
	  		$('.photo_divider').addClass('photo_divider_ie11');
		}
	});
	
	// Photo Item Roll Over 
	//==================================================================================
	$('.photo_item_preview > a').click(function() {
		return false;
	});
	
	// Popup
	//=================================================================================
	$('.popup').magnificPopup({
  		type: 'image',
		ajax: {
			settings: {cache:false} 
			// Ajax settings object that will extend default one - http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
			// For example:
			// settings: {cache:false, async:false}
		},
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			if (IEVersion() != 11) 
				{
	  				$('body').css('overflow','hidden');
				}
    		}
  		},
	});
	
	// Gallery - Photo Caption Animation
	//==================================================================================
	$('.photo_item').hover(
		function() {
			$(this).find( ".photo_caption" ).addClass('animated');
		},
		function() {
			$(this).find( ".photo_caption" ).removeClass('animated');
		}
	);
	
	// Gallery - Item
	//==================================================================================
	$('#category1').magnificPopup({
    	items: [
      	{
        	src: 'http://placehold.it/600x399'
      	},
     	{
        	src: 'http://placehold.it/200x200',
      	},
      	{
        	src: 'http://placehold.it/600x400',
      	}
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		},
	});
	
	$('#category2').magnificPopup({
    	items: [
      	{
        	src: 'http://placehold.it/600x400'
      	},
     	{
        	src: 'http://placehold.it/600x400',
      	},
      	{
        	src: 'http://placehold.it/600x400',
      	}
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		},
	});
	
	$('#category3').magnificPopup({
    	items: [
      	{
        	src: 'http://placehold.it/600x400'
      	},
     	{
        	src: 'http://placehold.it/600x400',
      	},
      	{
        	src: 'http://placehold.it/600x438',
      	}
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		},
	});
	
	$('#category4').magnificPopup({
    	items: [
      	{
        	src: 'http://placehold.it/600x399'
      	},
     	{
        	src: 'http://placehold.it/600x400',
      	},
      	{
        	src: 'http://placehold.it/600x400',
      	}
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		}
	});

	// Gallery - 2
	//==================================================================================
	var $gallery = $('#gallery2');
	// initialize Masonry after all images have loaded  
	$gallery.imagesLoaded( function() {
		$gallery.masonry({
			columnWidth: ".grid_sizer",
			itemSelector: ".masonry_col",
			transitionDuration: "1s",
		});
	});
	
	$('#gallery2').magnificPopup({
 		delegate: '.photo_item_overlay a', // child items selector, by clicking on it popup will open
  		type: 'image',
		gallery: {
          enabled:true
        },
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		},
	});
	
	// Owl Carousel - Gift Registry
	//==================================================================================
	$(document).ready(function() {
    	$("#registry_logo").owlCarousel({
			items : 4, 
			autoPlay: 2000,
			stopOnHover: true,
			pagination: false
		});
    });
	
	// Blog-2
	//==================================================================================
	var $blog = $('#blog2');
	// initialize Masonry after all images have loaded  
	$blog.imagesLoaded( function() {
		$blog.masonry({
			columnWidth: ".grid_sizer_blog",
			itemSelector: ".masonry_col_blog",
			transitionDuration: "1s",
			gutter: 20
		});
	});
	
	
	$(document).ready(function() {
		var a = 0;
	
		// Get some more blocks
		jQuery('#blogmore').click(function(){
			
			$(this).hide();
			$('#loading_more').show();
			a = a + 1;
			jQuery.get('blog-more.php?page=' + a, function( data ) {
				// Make jQuery object from HTML string
				var $moreBlocks = $($.parseHTML(data)).filter('*');
				
				$moreBlocks.hide();
				// Append new blocks
				jQuery('#blog2').append( $moreBlocks );
				
				$moreBlocks.imagesLoaded().progress( function( imgLoad, image ) {
    				// get item
    				// image is imagesLoaded class, not <img>, <img> is image.img
    				var $item = $( image.img ).parents( ".masonry_col_blog" );
    				// un-hide item
    				$item.show();
    				// masonry does its thing
    				jQuery('#blog2').masonry( 'appended', $item );	
  				});
				
				$moreBlocks.imagesLoaded().done( function() {
					if (data == "empty")
					{
						jQuery('#blogmore').hide();
						$('#loading_more').hide();
					}
					else
					{
						$('#loading_more').hide();
						$('#blogmore').show();
					}
					
					if( !device.tablet() && !device.mobile() ) {
						$.waypoints('refresh');
					}
  				});
						
			}); 	
			return false;				
		});
	});
	
	// Gmap
	//==================================================================================
   	jQuery(document).ready(function($) {
        $("#location_map").gMap({
             maptype: google.maps.MapTypeId.ROADMAP, 
             zoom: 15,
             markers: 
			 	[
			 		{
                 		latitude: 42.66137,
                 		longitude: 18.06527,
                 		html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\">" +
                            "</span><span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/236485/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Valamar Dubrovnik President Hotel" +
                            "</a></h4>" +
                            "<p>Ulica Iva Dulčića 18, 20000, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/236485/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/2000000/1380000/1371500/1371408/1371408_87_l.jpg\"></a>",
                		popup: false
					},
                    {
                        latitude: 42.66031,
                        longitude: 18.06348,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/239881/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Tirena Hotel" +
                            "</a></h4>" +
                            "<p>Ulica Iva Dulčića 36, 20000, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/239881/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/2000000/1370000/1366700/1366607/1366607_90_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.66175,
                        longitude: 18.06071,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/232361/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Valamar Argosy Hotel" +
                            "</a></h4>" +
                            "<p>Iva Dulčića 140, 20000, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/232361/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/2000000/1270000/1265600/1265599/1265599_130_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.66017,
                        longitude: 18.06319,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/310556/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Valamar Lacroma" +
                            "</a></h4>" +
                            "<p>Ulica Iva Dulčića 34, 20000, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/310556/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/3000000/2470000/2466900/2466878/2466878_205_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65990,
                        longitude: 18.05841,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/245499/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Hotel Neptun" +
                            "</a></h4>" +
                            "<p>Ulica kardinala Stepinca, 20000, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/245499/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/2000000/1530000/1520500/1520440/1520440_97_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65955,
                        longitude: 18.05904,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/371459/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Hotel Ariston" +
                            "</a></h4>" +
                            "<p>Ulica kardinala Stepinca, 20000, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/371459/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/5000000/4220000/4218800/4218774/4218774_53_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65939,
                        longitude: 18.05807,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/409776/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Royal Princess Hotel" +
                            "</a></h4>" +
                            "<p>Ulica kardinala Stepinca, 20000, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/409776/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/6000000/5140000/5136000/5135913/5135913_46_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.66169,
                        longitude: 18.05925,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/254349/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Valamar Dubrovnik President Hotel" +
                            "</a></h4>" +
                            "<p>Ulica Iva Dulčića 142, 20000, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/254349/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/2000000/1260000/1251800/1251785/1251785_126_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65923,
                        longitude: 18.05989,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/371458/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Royal Palm Hotel" +
                            "</a></h4>" +
                            "<p>Kardinala Stepinca 31 c, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/371458/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/5000000/4220000/4218800/4218763/4218763_102_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65735,
                        longitude: 18.06600,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/313067/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Hotel More" +
                            "</a></h4>" +
                            "<p>Kardinala Stepinca 33, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/313067/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/3000000/2600000/2595500/2595415/2595415_3_l.jpg\"></a>",
                        popup: true
                    },
                    {
                        latitude: 42.66194,
                        longitude: 18.07034,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/274481/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Pervanovo Apartments" +
                            "</a></h4>" +
                            "<p>Vatroslava Lisinskog 43 - 59, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/274481/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/3000000/2250000/2246500/2246496/2246496_7_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65727,
                        longitude: 18.06986,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/437557/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Apartments Mandy" +
                            "</a></h4>" +
                            "<p>Petra Svacica 10, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/437557/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/7000000/6380000/6377400/6377322/6377322_7_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65729,
                        longitude: 18.07014,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/395184/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Apartments Zore Glavinic" +
                            "</a></h4>" +
                            "<p>Petra Svacica 10, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/395184/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/3000000/2250000/2246500/2246496/2246496_7_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65588,
                        longitude: 18.06978,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/258768/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Hotel Dubrovnik" +
                            "</a></h4>" +
                            "<p>Šetalište Kralja Zvonimira 16, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/258768/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/2000000/1750000/1748200/1748198/1748198_27_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65581,
                        longitude: 18.07014,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/222616/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Hotel Kompas" +
                            "</a></h4>" +
                            "<p>Setaliste Kralja Zvonimira 56, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/222616/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/3000000/2250000/2246500/2246496/2246496_7_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65590,
                        longitude: 18.07237,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/255642/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Hotel Perla" +
                            "</a></h4>" +
                            "<p>Setaliste Kralja Zvonimira 20, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/255642/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/2000000/1680000/1680000/1680000/1680000_23_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65513,
                        longitude: 18.07340,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/245303/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Grand Hotel Park" +
                            "</a></h4>" +
                            "<p>Setaliste Kralja Zvonimira 39, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/245303/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/2000000/1530000/1526000/1525991/1525991_156_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65554,
                        longitude: 18.07391,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/268189/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Hotel Aquarius" +
                            "</a></h4>" +
                            "<p>Mata Vodopica 4a, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/268189/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/3000000/2040000/2031300/2031205/2031205_20_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65391,
                        longitude: 18.07055,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/243420/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Hotel Komodor" +
                            "</a></h4>" +
                            "<p>Marsarykov put 5, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/243420/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/2000000/1510000/1504400/1504327/1504327_9_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65315,
                        longitude: 18.06919,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/235641/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Hotel Adriatic" +
                            "</a></h4>" +
                            "<p>Masarykov put 9, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/235641/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/2000000/1360000/1359100/1359043/1359043_56_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65285,
                        longitude: 18.06849,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/245546/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Hotel Uvala" +
                            "</a></h4>" +
                            "<p>Marsarykov put 6, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/245546/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/2000000/1540000/1536000/1535940/1535940_14_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65275,
                        longitude: 18.06783,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/250777/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Hotel Vis" +
                            "</a></h4>" +
                            "<p>Marsarykov put 4, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/250777/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/2000000/1600000/1600000/1599992/1599992_31_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.65360,
                        longitude: 18.06601,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/235747/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Hotel Splendid" +
                            "</a></h4>" +
                            "<p>Masarykov put 10, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/235747/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/2000000/1360000/1359100/1359044/1359044_41_l.jpg\"></a>",
                        popup: false
                    },
                    {
                        latitude: 42.66396,
                        longitude: 18.07074,
                        html: "<div class=\"hotel-infobox\">" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<span class=\"glyphicon glyphicon-star\"></span>" +
                            "<h4><a href=\"http://www.travelnow.com/templates/336616/hotels/435432/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "Villa Franica" +
                            "</a></h4>" +
                            "<p>Ivana Zajca 41, Dubrovnik, Croatia</p>" +
                            "<a href=\"http://www.travelnow.com/templates/336616/hotels/435432/overview?lang=en&currency=GBP\" target=\"_blank\">" +
                            "<img src=\"http://images.travelnow.com/hotels/7000000/6250000/6249800/6249721/6249721_34_l.jpg\"></a>",
                        popup: false
                    }
                ],
             panControl: true,
             zoomControl: true, 
             mapTypeControl: true, 
             scaleControl: true, 
             streetViewControl: false,
             scrollwheel: false, 
             styles: [ {'featureType': "poi.business",'elementType': "labels",'stylers': [ { 'visibility': "off" } ] }, { "stylers": [ { "hue": "#00c0b6" }, { "gamma": 1 }, { "saturation": -50 } ] } ],
             onComplete: function() {
                 // Resize and re-center the map on window resize event
                 var gmap = $("#location_map").data('gmap').gmap;
                 window.onresize = function(){
                     google.maps.event.trigger(gmap, 'resize');
                     $("#location_map").gMap('fixAfterResize');
                 };
            }
        });
    });
	
	// Fix Photo Divider on Chrome on Retina Display
	//==================================================================================
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	
	if (window.devicePixelRatio >= 2 && is_chrome && !device.tablet() && !device.mobile()) {
		// Choose one of the options below:
		
		// 1. Hack for Fixed Photo Divider
		//$(document).scroll(function(){
    		//$(this).find('.photo_divider').hide().show(0);
		//});
		
		// 2.Change Fixed to Scroll Photo Divider
		$('.photo_divider').css("background-attachment","scroll");
	} 
	
	// Style Switcher
	//==================================================================================
	var clicked = 0;
	$('#theme_options').click(function(){
		if (clicked == 0)
		{
			$( "#style_switcher" ).animate({ "left": "0px" }, "fast" );
			clicked = 2;
			return false;
		}
		else
		{
			$( "#style_switcher" ).animate({ "left": "-110px" }, "fast" );
			clicked = 0;
			return false;
		}
	});