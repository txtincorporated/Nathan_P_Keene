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
    console.log('Loaded');
    $('#name').addClass('down').animate({marginTop: '+=2.5rem'}, 2500, function() {
      $('#shadow').animate({opacity: 1}).animate({opacity: 0}, 2500);
    }).delay(7000).animate({marginTop: '-=2.5rem'}, 6500).animate({opacity: 0}).promise().
    done(function() {
      $('#name').removeClass('down');
    });;
  }
);

//On click targeting  section .l-slider, flash fixed-position section #shadow (fixed-position, fixed aspect ratio section displaying only a blue inset box-shadow); drop and retract/fade nameplate
  $('#shadow').on('click', function() {
    console.log('Clicked');
    if ($('#name').hasClass('down')) {
      console.log('Name is down');
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
    var $otn = (window.orientation);
    if ($otn === -90) {
      console.log('Orientation: ' + window.orientation);
      setLandscape();
      return false;
    } else if($otn === 0) {
      console.log('portrait orientation');
      setPortrait();
    }
  };

  var setLandscape = function() {
    //animates fixed-position navs out to R and leaves clickable tab for getting them back; should be called as callback by "tab" click handler
    // CONSOLE-TEST
    console.log('setLandscape');
    //  -delay a couple seconds, then animate .skillsFixed, .l-slider, #name L margin 95%
    $('.skillsFixed, #l-slider, .wk, #name').finish().delay(2000).animate({marginLeft: '95%'}, 2500);

    //  -set #l-slider display: inline, opacity: 0
    $('#l-slider').css({display: 'none'}).promise().
    done(function() {
      //  -toggle visibility of lefthand "tab" div in .skillsAbs to 'on' (build this w/ W:H 1:1, border-rad. 100%, vert. align middle, and width 10% inside a container div w/ width 5% and overflow hidden)
      // return false;
      $('.sliderTab').animate({opacity: 1}, 800);
    });
  };

  var setPortrait = function() {
    console.log('setPortrait');
    $('.skillsFixed, #l-slider, .wk').animate({opacity: 1}, 2500);
    $('#shadow').animate({opacity: 1, backgroundColor: 'rgb(0,0,255)'}, 2500);
  };

  //  -on click to "tab", roll everything back out and setPortrait() so it overlays content, drop nameplate, flash #shadow, wait for a few seconds and then (here comes the callback) exeunt omnes stage L. once more
  // };

  var otnDetect = function() {
    $('page').load(setOtn());
    $(window).on('orientationchange', function() {
      console.log('orientation change');
      setOtn();
    });
  };

  otnDetect();

  //POSTER-IMAGE VIEWER FUNCTION A: RUN SLIDE SHOW THROUGH EACH ELEMENT
  var slideMe = function(callback) {
    // console.log('Start slideMe');
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
    // console.log('Slideshow resart');
    slideMe(reRun);//Starts slideshow and has itself re-fired at end by passing callback function to it that indirectly re-invokes slideOver in turn
  };

//
  aboutView.index = function() {
    var $about = $('#about');
    if($about.hasClass('pageInit')) {
      $about.toggleClass('pageInit');

      reImg();//Empties poster-image holder earliest-ancestor section #l-slider

      $('#l-slider div').append(
        projs.with('homepage').map(render1)//Compiles render1 Handlebars template to populate poster-images into the image-player
      ).fadeIn('slow');

      $('.skillsFixed').fadeIn('slow');

      slideMe(reRun);//Re-starts slideshow and has itself re-fired at end by passing callback function to it that re-invokes slideMe in turn
    }
  };

  module.aboutView = aboutView;
})(window);
