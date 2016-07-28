(function(module) {
  var projControl = {};
  projControl.index = function() {
    var $projx = $('#projects');

    $projx.show().siblings().hide();

    if (!projs.all[0]) {
      if($projx.hasClass('pageInit')) {
        $projx.toggleClass('pageInit');
        projs.getProjects(projView.index);
      }
      return;
    }
    projView.index();
    console.log('projControl.index finished');
  };
  module.projControl = projControl;
})(window);
