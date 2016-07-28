(function(module) {
  var aboutView = {};

  var reImg = function() {
    $('.l-slider').find('div').empty();
  };

  var render1 = Handlebars.compile($('#template1').text());

  aboutView.index = function() {
    reImg();

    $('.l-slider div').append(
      projs.with('homepage').map(render1)
    );
  };

  module.aboutView = aboutView;
})(window);
