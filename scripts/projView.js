(function(module) {
  var projView = {};

  var reProj = function() {
    var $projx = $('#projects');
    $projx.find('ul').empty();
  };

  var render2 = Handlebars.compile($('#template2').text());

  projView.index = function() {
    console.log('Start aboutView.index');
    aboutView.index();

    reProj();

    Handlebars.registerHelper('formatDate', function(date) {
      return moment(date).format('dddd MMMM Do, YYYY');
    });

    $('#projects ul').append(
      projs.with('homepage').map(render2)
    );

    var testArr = [];
    var $projArr = projs.all;
    $projArr.map(function(item) {testArr.push(item.size);});
    var sizeAll = testArr.reduce(function(a,b) {return a + b;});
    $('#totalSize').html('(Out of ' + '<b>' + parseInt((sizeAll/1000)) + ' MB</b> total)');

  };

  module.projView = projView;
})(window);
