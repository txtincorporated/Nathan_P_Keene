(function(module) {
  var projControl = {};
  projControl.index = function() {
    var $projx = $('#projects');

    $projx.show().siblings().hide();

    if (!projs.all[0]) {
      projs.getProjects(projView.index);
      return;
    }

    projView.index();

  };
  module.projControl = projControl;
})(window);
