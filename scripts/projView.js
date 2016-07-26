(function(module) {
  var projView = {};

  var reProj = function() {
    var $projx = $('#projects');
    var $navSlide = $('.l-slider');
    $projx.find('ul').empty();
    $navSlide.find('div').empty();

    $projx.show().siblings().hide();
  };

  var render1 = Handlebars.compile($('#template1').text());
  var render2 = Handlebars.compile($('#template2').text());


  projView.index = function() {
    reProj();

    Handlebars.registerHelper('formatDate', function(date) {
      return moment(date).format('dddd MMMM Do, YYYY');
    });

    $('.l-slider div').append(
      projs.with('size', 10000).map(render1)
    );
    $('#projects ul').append(
      projs.with('size', 10000).map(render2)
    );

    var testArr = [];
    var $projArr = projs.all;
    $projArr.map(function(item) {testArr.push(item.size);});
    var sizeAll = testArr.reduce(function(a,b) {return a + b;});
    $('#totalSize').html('(Out of ' + '<b>' + parseInt((sizeAll/1000)) + ' MB</b> total)');

  };

  module.projView = projView;
})(window);
