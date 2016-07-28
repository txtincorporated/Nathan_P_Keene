(function(module) {
  var projControl = {};
  projControl.index = function() {
    console.log(projs.all);
    console.log('ALLEY-OOP!');
    var $projx = $('#projects');

    $projx.show().siblings().hide();

    if (!projs.all[0]) {
      console.log(projs.all);
      if($projx.hasClass('pageInit')) {
        $projx.toggleClass('pageInit');
      }
      projs.getProjects(projView.index);//DONE: create projView.index in a file called   projView.js
      console.log('projControl.index finished');
    }
  };
  module.projControl = projControl;
})(window);
