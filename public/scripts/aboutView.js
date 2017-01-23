(function(module) {
  var aboutView = {};
  //Render Handlebars template for portfolio-featured repos
  var render1 = Handlebars.compile($('#template1').text());
  //Empty poster-image holder div
  var reImg = function() {
    var $slideShow = $('#l-slider');
    $slideShow.find('div').empty();
  };

  //On page load, drop down nameplate nav element (linked to section #projects) and then re-conceal
  $(document).ready(function() {
<<<<<<< HEAD
=======

>>>>>>> portfolioV16a
    $(window).scroll(function() {
      $('#shadow').stop(false,true);
    });
    $('#name').addClass('down').animate({marginTop: '+=2.5rem'}, 2500, function() {
      $('#shadow').animate({opacity: 1}).animate({opacity: 0}, 2500);
    }).delay(7000)
      .animate({marginTop: '-=2.5rem'}, 6500)
      .animate({opacity: 0})
      .promise().
    done(function() {
      $('#name').removeClass('down');
    });
  }
);

  //When section #l-slider clicked, flash fixed-position section #shadow (fixed-position, fixed aspect ratio section displaying only a blue inset box-shadow); drop and retract/fade nameplate
  $('#shadow').on('click', function() {
<<<<<<< HEAD
    if ($('#name').hasClass('down')) {
=======

    if ($('#name').hasClass('down')) {

>>>>>>> portfolioV16a
      $('#shadow').animate({opacity: 1}).animate({opacity: 0}, 500);
      return;
    }
    $('#shadow').animate({opacity: 1}).animate({opacity: 0}, 500);
    $('#name').addClass('down').animate({opacity: 1, marginTop: '+=2.5rem'}, 2500).delay(5000).animate({marginTop: '-=2.5rem', opacity: 0}, 2500).promise().
    done(function() {
      $('#name').removeClass('down');
    });
  });

  //RECONFIGURE POSTER-IMAGE VIEWER AS NEEDED IN MOBILE DEVICES
  var setOtn = function() {
    var otn = window.orientation;
    var winWidth = window.innerWidth;
    if(otn === -90 || otn === 90) {
      if(winWidth <= 768) {
<<<<<<< HEAD
=======

>>>>>>> portfolioV16a
        setLandscape();
        return false;
      }
    } else if(otn === 0) {
<<<<<<< HEAD
=======

>>>>>>> portfolioV16a
      setPortrait();
    }
  };

  //Animate fixed-position navs out to R and leaves clickable tab for getting them back; should be called as callback by "tab" click handler
  var setLandscape = function() {
   //Animates fixed-position navs out to R and leaves clickable tab for getting them back; should be called as callback by "tab" click handler
    
    // CONSOLE-TEST
    //Double-check orientation before continuing function
    if(window.orientation === 0) {
      return false;
    }
    //prep for layout reconfig by fading out content #sections, #shadow
    $('#sections, #shadow').fadeOut('fast'); //NOTE: #sections to re-fadeIn after #l-slider turned off
    //animate .skillsFixed, .l-slider, #name, #shadow L margin 95%
    $('.skillsFixed, .wk, #name, #shadow').animate({marginLeft: '95%'}, {duration: 800, queue: false});
    //Remove #l-slider from document flow
    $('#l-slider').fadeOut({duration: 800, queue: false}).promise().
    done(function() {
      //display lefthand "tab" div in .skillsAbs and simultaneously reposition and re-fadeIn content #sections
      $('html, body').animate({scrollTop: 0});
      $('#sections').fadeIn(800);
      $('.skillsAbs > div').show().animate({opacity: 1}, {duration: 1200, queue: false});
    });
  };

  $('.skillsAbs > div').on('click', function() {
    //When lefthand .skillsAbs "tab" clicked, animate slideshow/nav assembly in and back out of way in landscape otn.
    landSlider();
  });

  var landSlider = function() {
    //run setPortrait, wait a few seconds, then re-run setLandscape
    setPortrait();
    window.setTimeout(setLandscape, 7000);
    $('.sliderTab').css({background: 'black', boxShadow: '0 0 2px yellow'});
    $('.skillsAbs > div').css('border-right', '1px solid rgba(255, 255, 0, 0.5)');
    $('.sliderTab > div').css('box-shadow', '-1px 1px 1px rgba(255,255,0,0.75)');
  };

  var setPortrait = function() {
    //Restore slideshow/nav assembly to correct position for portrait-orientation, or for site navigation in landscape otn.
    if ($('#about').hasClass('pageInit')) {
      //Aborts if running on initial page load
      return false;
    }

    //Reposition/reveal slideshow/nav assembly above/over content
    $('#l-slider').fadeIn().animate({marginLeft: 0}, {duration: 1000});
    $('#shadow').fadeIn(800);
    $('.skillsAbs > div').fadeOut(1000);
    $('.skillsFixed, .wk, #name, #shadow').finish().animate({marginLeft: 0}, 1000);
    $('#shadow').animate({opacity: 1}).animate({opacity: 0}, 500);
    $('#name').addClass('down').animate({opacity: 1, marginTop: '+=2.5rem'}, 2500).animate({marginTop: '-=2.5rem', opacity: 0}, 4500).promise().
    done(function() {
      $('#name').removeClass('down');
    });
  };

  var otnDetect = function() {
    //Checks orientation on page load and device reorientation
    $('page').load(setOtn());
    $(window).on('orientationchange', function() {
      $('.above, .atRight').toggle();

      setOtn();
    });
  };
  otnDetect();

  //POSTER-IMAGE VIEWER FUNCTION A: RUN SLIDE SHOW THROUGH EACH ELEMENT
  var slideMe = function(callback) {

    var $lastInd = $('.imgHolder a:last-child').index();
    $('.imgHolder img').each(function(index) {
      $(this).delay((($lastInd - index) * 6500) + 2000).fadeOut(2000);
    }).promise().
    done(function() {
      $('.imgHolder img').delay(300).css('display', '');
      $('.imgHolder').css('opacity', 0);
      callback();
    });
  };

  //POSTER-IMAGE FUNCTION C: CALLBACK TO RE-CUE SLIDESHOW
  var reRun = function() {
    $('.imgHolder').delay(5000).animate({opacity: 1}, 2000).promise().
    done(function() {
      slideOver();
    });
  };

  //POSTER-IMAGE FUNCTION D: RUNS P-I FUNCTION A
  var slideOver = function() {

    slideMe(reRun);//Starts slideshow and has itself re-fired at end by passing callback function to it that indirectly re-invokes slideOver in turn
  };

  //Set up animated fixed-position nav assembly which persists at top of every page
  aboutView.index = function() {
    var $about = $('#about');//Section functioning as landing page
    //Check whether page is just-loaded
    if($about.hasClass('pageInit')) {
      $about.toggleClass('pageInit');

      reImg();//Empties poster-image holder earliest-ancestor section #l-slider

      //Compile render1 Handlebars template to populate poster-images into the image-player
      $('#l-slider div').append(
        projs.with('homepage').map(render1)
      ).fadeIn('slow');

      $('.skillsFixed').fadeIn('slow');

      slideMe(reRun);//(Re-)starts slideshow and has itself re-fired at end by passing callback function to it that re-invokes slideMe in turn
    }
  };

  module.aboutView = aboutView;
})(window);
