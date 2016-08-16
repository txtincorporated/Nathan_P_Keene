(function(module) {
  var projControl = {};
  projControl.index = function() {
    var $projx = $('#projects');

    $('html, body').animate({scrollTop: 0}, 0);
    $projx.fadeIn('slow').siblings().hide();

    if (!projs.all[0]) {
      projs.getProjects(projView.index);
      return;
    }

    projView.index();

  };
  module.projControl = projControl;
})(window);
