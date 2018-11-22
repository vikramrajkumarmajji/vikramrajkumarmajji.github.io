//Use Strict Mode
(function($) {
  "use strict";

//Begin - Window Load
$(window).load(function(){


	//==============___Page Loader___================
  
  $('#page-loader').delay(300).fadeOut(400, function(){

  });

  $('#loader-name').addClass('loader-left');
  $('#loader-job').addClass('loader-right');
  $('#loader-animation').addClass('loader-hide');

});

//Begin - Document Ready
$(document).ready(function(){

//==============___Page Loader___================
  $('#loading-wraper').fadeIn(300);

//==============___Testimonials - owl Carousel___================
 $("#testimonial-carousel").owlCarousel({
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,      
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: true,
    singleItem: true,    
    navigationText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],     
  });


//==============_Map_================
$('.map').on('click', function(){
	$('.map-overlay').hide();
});

$('.map').on('mouseleave', function(){
	$('.map-overlay').show();
});

//==============_Lightbox_================
//Nivo Lightbox
  $('a.nivobox').nivoLightbox({ effect: 'fade' });


//==============___Scrollbars___================
$('.section-vcardbody').perfectScrollbar({
  wheelSpeed: 0.9
});

//==============___Menu & Pages Animation___================

var linkHome = 0;
var linkPage = '';

function pageOn(){
    $('#main-menu').addClass('main-menu-pgactive');
    $('#section-home').addClass('section-vcardbody-pgactive');    
    $('.profileActive').removeClass('profileActive');    
    $('#profile2').addClass('profileActive');
    
    linkHome = 1;
}

function pageOff(){
    $('.section-page-active').removeClass('section-page-active');
    $('#main-menu').removeClass('main-menu-pgactive');
    $('#section-home').removeClass('section-vcardbody-pgactive');
    $('.profileActive').removeClass('profileActive');
    $('#profile1').addClass('profileActive');
    linkHome = 0;
}


$(".link-page").on('click', function(event){
  event.preventDefault();
  $('.menuActive').removeClass('menuActive');  
  $(this).addClass('menuActive');
  linkPage = $(this).attr('href');
  $('.section-page-active').removeClass('section-page-active');
  $(linkPage).addClass('section-page-active');
  pageOn();
});


$(".link-home").on('click', function(event){
  event.preventDefault();

  if (linkHome == 0) {
    //pageOn();
  }
  else if (linkHome == 1) {
    $('.menuActive').removeClass('menuActive');
    $(this).addClass('menuActive');
    pageOff();
  }  
});

//==============___Blog - Ajax___================
function loadPost(){
   $.ajax({
      url: 'single.html', // URL HERE
      type: 'GET',
      success: function(html) {

        var $lis = $(html).find('#blogPost'); // Loads the content inside #blogPost div

        $("#postHere").html($lis);
    }
  });
}

$(".loadPost").on('click', function(event){
  event.preventDefault();
  //$("#postHere").html('loading...');
  $('.section-page-active').removeClass('section-page-active');
  $('#page-blog-single').addClass('section-page-active');
  pageOn();
  loadPost();
});

//==============___Contact Form Validator and Ajax Sender___================
  $("#contactForm").validate({
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "php/contact-form.php",
        data: {
          "name": $("#contactForm #name").val(),
          "email": $("#contactForm #email").val(),
          "subject": $("#contactForm #subject").val(),
          "message": $("#contactForm #message").val()
        },
        dataType: "json",
        success: function (data) {
          if (data.response == "success") {
            $("#contactSuccess").fadeIn(300);
            $("#contactError").addClass("hidden");

            $("#contactForm #name, #contactForm #email, #contactForm #subject, #contactForm #message")
              .val("")
              .blur()
              .closest(".control-group")
              .removeClass("success")
              .removeClass("error");              
            
          } else {
            $("#contactError").fadeIn(300);
            $("#contactSuccess").addClass("hidden");
          }
        }

      });
    }
  });


//Modal for Contact Form
$('.modal-wrap').click(function(){
  $('.modal-wrap').fadeOut(300);
});   

//End - Document Ready
});

//End - Use Strict mode
})(jQuery);










particlesJS("particles-js", {"particles":{"number":{"value":111,"density":{"enable":true,"value_area":881.8766334760375}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;