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

    Handlebars.registerHelper('formatDate', function(date) {
      return moment(date).format('dddd MMMM Do, YYYY');
    });

    $('#projects ul').append(
      projs.with('size', 10000).map(render)
    );

    var testArr = [];
    var $projArr = projs.all;
    $projArr.map(function(item) {testArr.push(item.size);});
    var sizeAll = testArr.reduce(function(a,b) {return a + b;});
    $('#totalSize').html('(Out of ' + '<b>' + parseInt((sizeAll/1000)) + ' MB</b> total)');

  };

  module.projView = projView;
})(window);
