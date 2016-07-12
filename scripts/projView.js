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

    var testArr = [];
    var $projArr = projs.all;
    $projArr.map(function(item) {testArr.push(item.size);});
    var sizeAll = testArr.reduce(function(a,b) {return a + b;});
    $('#totalSize').html('(Out of ' + parseInt((sizeAll/1000)) + ' MB total)');

  };

  module.projView = projView;
})(window);
