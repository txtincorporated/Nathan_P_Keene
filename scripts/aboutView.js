(function(module) {
  var aboutView = {};

  var render1 = Handlebars.compile($('#template1').text());

  aboutView.index = function() {
    console.log('Start aboutView.index');

    $('.l-slider div').append(
      projs.with('homepage').map(render1)
    );
  };

  module.aboutView = aboutView;
})(window);
