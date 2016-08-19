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

  // //REFORMAT/REPROGRAM POSTER-IMAGE VIEWER ON SWITCH FROM PORTRAIT TO LANDSCAPE ORIENTATION IN MOBILE DEVICES
  //   //Detect device-orientation
  // var orientate = function(callback) {
  //
  // };
  // orientate(setOtn);
  //
  //   //Set orientation-specific UI format accordingly
  // var setOtn = function() {
  //
  // };
  //   //Detect change in device-orientation
  // var reOrientate = function(callback) {
  //   //...
  //   callback();
  // };
  // reorientate(setOtn);

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
