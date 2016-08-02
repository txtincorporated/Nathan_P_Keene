(function(module) {
  var aboutControl = {};

  aboutControl.index = function() {
    $('#about').show().siblings().hide();

    if (!projs.all[0]) {
      projs.getProjects(aboutView.index);
    }

    // $('.l-slider').on('click', function() {
    //   if (location.href !=='/projx') {
    //     location.replace('/projx');
    //   }
    // });
  };
  module.aboutControl = aboutControl;
})(window);
