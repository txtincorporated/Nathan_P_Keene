(function(module) {
  var aboutControl = {};
  aboutControl.index = function() {
    $('#about').show().siblings().hide();
  };
  module.aboutControl = aboutControl;
})(window);
