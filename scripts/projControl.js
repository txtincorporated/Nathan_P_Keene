(function(module) {
  var projControl = {};
  projControl.index = function() {
    var $projx = $('#projects');
    $projx.show().siblings().hide();
    if($projx.hasClass('pageInit')) {
      $projx.toggleClass('pageInit');
      projs.getProjects(projView.index);//DONE: create projView.index in a file called   projView.js
    }
  };
  module.projControl = projControl;
})(window);
