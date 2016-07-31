// Sandbox for sboxSlider
//FUNCTION A: INIT SLIDE SHOW
$(this).on('load', function() {
  $('.imgBox div').hide();
  $('.imgBox div:first-child').show();//hide images
  slideMe(reRun);
});

//FUNCTION B: RUN SLIDE SHOW THROUGH EACH ELEMENT
var slideMe = function(callback) {
  $('.imgBox div').each(function() {
    var $this = $(this);
    $this.fadeOut(3000).next().delay(3000).fadeIn(3000).promise().done(function() {
      // callback();
    });
  });
};

//FUNCTION C: CALLBACK TO RE-RUN FUNCTION A
var reRun = function() {
  slideOver();
};

var slideOver = function() {
  slideMe(reRun);
};
//
//for each
//if this is the last one fade it out while the first one fades in, then proceed
//otherwise fade it out while the next one fades in
