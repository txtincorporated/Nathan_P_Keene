// Sandbox for sboxSlider
//GLOBAL VARIABLES
$imgBox = $('.imgBox div');
//FUNCTION A: INIT SLIDE SHOW
$(this).on('load', function() {
  slideMe(reRun);
});

//FUNCTION B: RUN SLIDE SHOW THROUGH EACH ELEMENT
var slideMe = function(callback) {
  var $lastInd = $('.imgBox div:last-child').index();
  $('.imgBox div').each(function(index) {
    $(this).delay(($lastInd - index) * 3500).fadeOut(3500);
  }).promise().
  done(function() {
    callback();
  });
};

//FUNCTION C: CALLBACK TO RE-RUN FUNCTION A
var reRun = function() {
  // console.log('Callback fired');
  $('.imgBox div').fadeIn(3500);
  slideOver();
};

var slideOver = function() {
  // console.log('Slideshow resart');
  slideMe(reRun);
};

//for each
//if this is the last one fade it out while the first one fades in, then proceed
//otherwise fade it out while the next one fades in
