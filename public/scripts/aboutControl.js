(function(module, $) {
  var aboutControl = {};

  aboutControl.index = function() {
    $('html, body').animate({scrollTop: 0}, 0);
    $('#about').fadeIn('slow').siblings().hide();

    if (!projs.all[0]) {
      projs.getProjects(aboutView.index);
    }
  };
  module.aboutControl = aboutControl;
})(window, jQuery);
