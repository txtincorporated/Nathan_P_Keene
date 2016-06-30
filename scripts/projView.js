(function(module) {
  var projView = {};

  var reProj = function() {
    $projx = $('#projects');
    $projx.find('ul').empty();
    $projx.show().siblings().hide();
  };

  var render = Handlebars.compile($('#template').text());

  projView.index = function() {
    reProj();

    $('#projects ul').append(
      projs.with('stargazers').map(render)
    );
  };

  module.projView = projView;
})(window);
