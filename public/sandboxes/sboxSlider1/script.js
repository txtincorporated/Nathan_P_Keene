// Sandbox for sboxSlider
//FUNCTION A: INIT SLIDE SHOW
  //#l-slider on load
$(this).on('load', function() {
  var $imgBox = $('.imgBox div');
  $imgBox.hide();  //hide images
  slideMe(newSlide);
});

var slideMe = function(callback) {
  if ($('.imgBox div:last-child').hasClass('nowShowing')) {
    $('.imgBox div:last-child').fadeOut(3000).removeClass('nowShowing');
    $('.imgBox div:first-child').addClass('nowShowing');
  }
  $('.nowShowing').fadeIn(3000).fadeOut(3000);  //add class 'nowShowing' to first image and show it
  $('.nowShowing + div').
  delay(3000).fadeIn(3000).promise().done(function() {
    $('.nowShowing + div').addClass('nowShowing').
    prev().removeClass('nowShowing');
    callback();
  });
};

var newSlide = function() {
  // $('.nowShowing');
  console.log('Starting newSlide');
  slideEm();
};

var slideEm = function() {
  slideMe(newSlide);
};

  //run callback FUNCTION B

//FUNCTION B: RUN SLIDESHOW
  //fadeOut 'nowShowing'
  //if 'nowShowing' has next sibling...
    //fadeOut 'nowShowing', addClass 'nowShowing' to '.nowShowing' next sibling, removeClass 'nowShowing' from '.imgHolder' firstchild with class 'nowShowing' (can you actually do that?), and fadeIn (newly-minted) '.nowShowing'
    //run callback FUNCTION C
    //return
  //fadeOut 'nowShowing', addClass 'nowShowing' to '.imgHolder' firstchild, removeClass 'nowShowing' from '.imgHolder' lastchild, fadeIn '.nowShowing'
  //run callback FUNCTION C

//FUNCTION C:  CALL FUNCTION B
