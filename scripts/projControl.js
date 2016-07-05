(function(module) {
  var projControl = {};
  projControl.index = function() {
    $('.wk').on('click', function() {
      $('#projects').show().siblings().hide();
    });
    $('#name').on('click', function() {
      $('#about').show().siblings().hide();
    });
    projs.getProjects(projView.index);//DONE: create projView.index in a file called projView.js
  };
  module.projControl = projControl;
})(window);
