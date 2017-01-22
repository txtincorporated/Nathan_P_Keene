(function(module) {
  var projControl = {};
  projControl.index = function() {
    var $projx = $('#projects');

    $('html, body').animate({scrollTop: 0}, 0);//Start w/ top margin of text body positioned consistently
    $projx.fadeIn('slow').siblings().hide();
    console.log('projs.all: ', projs.all);
    //If no first item in array of repo objects, run REST call to GitHub API with callback to filter and populate template with selected content
    if (!projs.all[0]) {
      projs.getProjects(projView.index);
      return;
    }

    //If repos already loaded into array, filter and display those selected
    projView.index();

  };
  module.projControl = projControl;
})(window);
