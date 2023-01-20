jQuery(document).ready(function () {

    $('#videolink').magnificPopup({
        type: 'inline',
        midClick: true
    });
    
});

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
    });
});

$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });


});

$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.gallery').isotope({
        // options
        itemSelector: '.items'
      });
  
      var $gallery = $('.gallery').isotope({
        // options
      });
  
      // filter items on button click
      $('.filtering').on( 'click', 'span', function() {
  
          var filterValue = $(this).attr('data-filter');
  
          $gallery.isotope({ filter: filterValue });
  
      });
  
      $('.filtering').on( 'click', 'span', function() {
  
          $(this).addClass('active').siblings().removeClass('active');
  
      });
});

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
       items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        autoPlay:false
        
    });     
   $('.count').counterUp({
              delay: 10,
              time: 4000
          });
});


$(function(){
    $("#clients-list").owlCarousel({
       items:6,
        autoPlay:false,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:false,
        dots:false,
        
        responsive:{
            0:{
                items:2
            },
            
             480:{
                items:3
            },
            
             768:{
                items:6
            }
         
        }
    });
  
    $("#news-slider").owlCarousel({
        items:3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[1000,2],
        itemsMobile:[600,1],
        pagination:false,
        navigationText:false,
        autoPlay:true
       
        
    });
   
 
});

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
        
function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#686868"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"lightness":"-22"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"saturation":"11"},{"lightness":"-51"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"saturation":"3"},{"lightness":"-56"},{"weight":"2.20"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"lightness":"-52"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"weight":"6.13"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"lightness":"-10"},{"gamma":"0.94"},{"weight":"1.24"},{"saturation":"-100"},{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"lightness":"-16"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"saturation":"-41"},{"lightness":"-41"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"weight":"5.46"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"weight":"0.72"},{"lightness":"-16"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"lightness":"-37"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#b7e4f4"},{"visibility":"on"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
    });
}

jQuery(document).ready(function(){
    $(window).scroll(function() {
 
     if ($(window).scrollTop() > 80) {
         $('.main_header').addClass('sticky');
     } else {
         $('.main_header').removeClass('sticky');
     }
 });

 $('.mobile-toggle').click(function() {
    if ($('.main_header').hasClass('open-nav')) {
        $('.main_header').removeClass('open-nav');
    } else {
        $('.main_header').addClass('open-nav');
    }
});

$('.main_header li a').click(function() {
    if ($('.main_header').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_header').removeClass('open-nav');
    }
});

 
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 0;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 600);
    event.preventDefault();
});
new WOW().init();
});