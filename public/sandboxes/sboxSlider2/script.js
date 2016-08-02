// Sandbox for sboxSlider
//SLIDESHOW GLOBAL VARIABLES
$imgBox = $('.imgBox div');

//FUNCTION A: INIT SLIDE SHOW
$(this).on('load', function() {
  slideMe(reRun);
});

//FUNCTION B: RUN SLIDE SHOW THROUGH EACH ELEMENT
var slideMe = function(callback) {
  var $lastInd = $('.imgBox div:last-child').index();
  $('.imgBox div').each(function(index) {
    $(this).delay(($lastInd - index) * 4500).fadeOut(4500);
  }).promise().
  done(function() {
    // console.log(this);
    callback();
  });
};

//FUNCTION C: CALLBACK TO RE-CUE FUNCTION A
var reRun = function() {
  // console.log('Callback fired');
  $('.imgBox div').fadeIn(1000);
  slideOver();
};

//FUNCTION D: RUNS FUNCTION A
var slideOver = function() {
  // console.log('Slideshow resart');
  slideMe(reRun);
};
