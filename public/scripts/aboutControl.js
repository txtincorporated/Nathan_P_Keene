(function(module) {
  var aboutControl = {};
  aboutControl.index = function() {
    $('#about').show().siblings().hide();

    var $about = $('#about');

    if (!projs.all[0]) {
      if ($about.hasClass('pageInit')) {
        $about.toggleClass('pageInit');
        projs.getProjects(aboutView.index);
      }
    }

    // $('.l-slider').on('click', function() {
    //   if (location.href !=='/projx') {
    //     location.replace('/projx');
    //   }
    // });
  };
  module.aboutControl = aboutControl;
})(window);
