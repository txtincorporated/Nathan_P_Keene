(function(module) {
  var aboutView = {};

  var render1 = Handlebars.compile($('#template1').text());

  var reImg = function() {
    var $slideShow = $('#l-slider');
    $slideShow.find('div').empty();
  };

  $(document).ready(function() {
    console.log('Loaded');
    $('#name').animate({marginTop: '+=2.5rem'}, 'slow').delay(7000).fadeOut(6500).animate({marginTop: '-=2.5rem'}, 2500).fadeIn();
  }
);

  $('#l-slider').on('click', function() {
    console.log('Clicked');
    $('#name').animate({marginTop: '+=2.5rem'}, 'fast').delay(5000).animate({marginTop: '-=2.5rem', opacity: 0}, 2500).css({opacity: '0.98'});
  });

  //FUNCTION A: RUN SLIDE SHOW THROUGH EACH ELEMENT
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

  //FUNCTION C: CALLBACK TO RE-CUE SLIDESHOW
  var reRun = function() {
    $('.imgHolder').delay(5000).animate({opacity: 1}, 2000).promise().
    done(function() {
      slideOver();
    });
  };

  //FUNCTION D: RUNS FUNCTION A
  var slideOver = function() {
    // console.log('Slideshow resart');
    slideMe(reRun);
  };

  aboutView.index = function() {
    var $about = $('#about');
    if($about.hasClass('pageInit')) {
      $about.toggleClass('pageInit');

      reImg();

      $('#l-slider div').append(
        projs.with('homepage').map(render1)
      );

      slideMe(reRun);
    }
  };

  module.aboutView = aboutView;
})(window);
