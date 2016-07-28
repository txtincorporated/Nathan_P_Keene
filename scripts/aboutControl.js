(function(module) {
  var aboutControl = {};
  aboutControl.index = function() {
    console.log('Start aboutControl.index');
    $('#about').show().siblings().hide();

    var $about = $('#about');

    if (!projs.all[0]) {
      console.log(projs.all);
      if ($about.hasClass('pageInit')) {
        $about.toggleClass('pageInit');
        projs.getProjects(aboutView.index);
        console.log('aboutControl.index finished');
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
