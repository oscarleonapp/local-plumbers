jQuery(document).ready(function($) {
	
	Foundation.Interchange.SPECIAL_QUERIES['smallium'] = 'only screen and (min-width: 485px)';
	Foundation.Interchange.SPECIAL_QUERIES['merge'] = 'only screen and (min-width: 786px)';
	
	$(document).foundation();

	// Sticky nav
	
	function init() {
	    window.addEventListener('scroll', function(e){
	        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
	            shrinkOn = 50,
	            body = document.querySelector("body");
	            header = document.querySelector("#header-container");
	        if (distanceY > shrinkOn) {
		        classie.add(body,"smaller");
	            classie.add(header,"smaller");
	        } else {
	            if (classie.has(header,"smaller")) {
	                classie.remove(body,"smaller");
	                classie.remove(header,"smaller");
	            }
	        }
	    });
	}
	window.onload = init();
	
	$('#primary-nav-container-mobile ul').each(function(){
	    var parent = $(this).parent();
	    $(this).prepend( "<li class='hide-for-large recreated-parent'><a href='" + parent.find('a:first').attr('href') + "'>" + parent.find('a:first').html() + "</a></li>" );
	});
	
	$('.logo-slider').slick({
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 5,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    },
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
	
	// Responsive Menu
	$('.title-bar').on('click', function(e){

		e.preventDefault();

		if($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}

		$(this).foundation('toggleMenu');

	});
	
	$('#primary-nav-container-mobile .is-accordion-submenu-parent a').addClass('noanimationscreen');
	
	// Skrollr
/*
	skrollr.init({
		forceHeight: false,
		mobileCheck: function() {
			return false;
		}
	});
*/
	
	$(document).mouseup(function (e) {

	    var container = $('#sharing-options');
	    
	    if (!container.is(e.target) && container.has(e.target).length === 0 && !container.hasClass('is-hidden')) {
	        container.addClass('is-hidden');
	    }

	});

	$("img.lazy").lazyload({
    	effect : "fadeIn",
    	//threshold : 800
	});
	
	$('.gallery-view-flex').slick({
	    dots: false,
	    infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    nextArrow:'<i class="fa fa-angle-right"></i>',
	    prevArrow:'<i class="fa fa-angle-left"></i>',
	});
	
	$("#contact-flyout-action a, #flyout-form .close-button").on("click", function(event) {
		
		$menuLeft = $('.pushmenu-left');
		
		//$( "#flyout-form" ).toggleClass( "active" );
		$( "body" ).toggleClass( "overlay" );
		$('.pushmenu-push').toggleClass('pushmenu-push-toright');
		$menuLeft.toggleClass('pushmenu-open');
		
	});
	
	// Wrap portfolio/case study image half columns in a row tag
	// Wrap every 2nd .large-6, .medium-6 div in a .row
	var divs = $(".single-portfolio #page-content .small-6");
	for(var i = 0; i < divs.length; i+=2) {
	  divs.slice(i, i+2).wrapAll("<div class='row'></div>");
	}
	
	// Wrap main menu portfolio items in columns
	$.each($(".split"), function() {
		var untilBar = $(this).nextUntil(".split-end").addBack(); //Select .split li and it's siblings until .split-end
        untilBar.add(untilBar.next()).wrapAll('<div class="small-6 columns"></div>'); //Add .split-end to the set and wrap
    });
    
	$.each($(".split2"), function() {
		var untilBar = $(this).nextUntil(".split2-end").addBack(); //Select .split2 li and it's siblings until .split2-end
        untilBar.add(untilBar.next()).wrapAll('<div class="small-6 columns"></div>'); //Add .split2-end to the set and wrap
    });
    
    // Get CTA Link Sidebar
    var cta_sidebar_link = $(".cta-link").attr('href');
    $('a.cta-block-link').attr('href', cta_sidebar_link);
    
    // Open all external links in new window/tab
    
	$("a[href^=http]").each(function(){
	    if(this.href.indexOf(location.hostname) == -1) {
	        $(this).attr({
	            target: "_blank",
	            title: "Opens in a new window"
	        });
	    }
	});
	
	// Conditionally Load Disqus onClick
    $('.show-comments').on('click', function(){
          var disqus_shortname = 'kickcharge'; // Replace this value with *your* username.

          // ajax request to load the disqus javascript
          $.ajax({
                  type: "GET",
                  url: "https://" + disqus_shortname + ".disqus.com/embed.js",
                  dataType: "script",
                  cache: true
          });
          // hide the button once comments load
          $(this).fadeOut();
    });
    
	// Init ScrollMagic
	
/*
	var controller = new ScrollMagic.Controller();
	
	// loop through each .animation-container element
	$('.ajax-portfolio').each(function(){
		
		//console.log(this);
	
		// Build Scene
		
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook: 0.9,
			//reverse: false
		})
		
		.setClassToggle('.portfolio-grid', 'fadeInUp')
		.addIndicators({
			name: 'fade block',
			colorTrigger: 'black',
			colorStart: '#c3c3c3',
			colorEnd: 'pink'
		}) // This requires plugin
		.addTo(controller);
		
	});
*/


// Home Stats Slider

$('.stats-slider-container').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//About page timeline slideshow
	$('.timeline').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  nextArrow:'<svg class="svg-inline--fa fa-angle-right fa-w-8 slick-arrow" style="display: block;" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>',
	  prevArrow:'<svg class="svg-inline--fa fa-angle-left fa-w-8 slick-arrow" style="display: block;" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>',
	  responsive: [
	    {
	      breakpoint: 1170,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
		    breakpoint: 600,
		    settings:{
			    slidesToShow: 2,
				slidesToScroll: 2
		    }
	    },
	    {
		    breakpoint: 400,
		    settings:{
			    slidesToShow: 1,
				slidesToScroll: 1
		    }
	    }
	  ]
	});
	
//Home Page Slideshow
$('.home-slideshow').slick({
	centerMode: true,
	slidesToShow: 1,
	arrows: true,
	dots: true,
	variableWidth: true,
	appendArrows: ".home-slideshow-nav", 
	appendDots: ".home-slideshow-nav",
	prevArrow: '<i class="fa fa-angle-left"></i>',
	nextArrow: '<i class="fa fa-angle-right"></i>',
});

});