(function(module) {
  var aboutControl = {};
  aboutControl.index = function() {
    $('#about').show().siblings().hide();

    projs.getProjects(aboutView.index);

    $('.l-slider').on('click', function() {
      location.replace('/projx');
    });
  };
  module.aboutControl = aboutControl;
})(window);
