(function(module) {
  var projView = {};

  var reProj = function() {
    var $projx = $('#projects');
    $projx.find('ul').empty();
    $projx.show().siblings().hide();
  };

  var render = Handlebars.compile($('#template').text());

  projView.index = function() {
    reProj();

    $('#projects ul').append(
      projs.with('stargazers_count').map(render)
    );
  };

  module.projView = projView;
})(window);
