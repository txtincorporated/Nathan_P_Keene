(function(module) {
  var aboutView = {};

  var render1 = Handlebars.compile($('#template1').text());

  var reImg = function() {
    var $slideShow = $('.l-slider');
    $slideShow.find('div').empty();
  };

  //FUNCTION A: RUN SLIDE SHOW THROUGH EACH ELEMENT
  var slideMe = function(callback) {
    // console.log('Start slideMe');
    var $lastInd = $('.imgHolder a:last-child').index();
    $('.imgHolder img').each(function(index) {
      $(this).delay((($lastInd - index) * 6500) + 2000).fadeOut(2000);
    }).promise().
    done(function() {
      $('.imgHolder img').delay(300).css('display', '');
      $('.imgHolder').hide();
      callback();
    });
  };

  //FUNCTION C: CALLBACK TO RE-CUE SLIDESHOW
  var reRun = function() {
    console.log('Callback fired');
    $('.imgHolder').delay(5000).fadeIn(2000).promise().
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

      $('.l-slider div').append(
        projs.with('homepage').map(render1)
      );

      slideMe(reRun);
    }
  };

  module.aboutView = aboutView;
})(window);
