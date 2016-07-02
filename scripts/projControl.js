(function(module) {
  var projControl = {};
  projControl.index = function() {
    $('#projects').show().siblings().hide();
    projs.getProjects(projView.index);//DONE: create projView.index in a file called projView.js
  };
  module.projControl = projControl;
})(window);
