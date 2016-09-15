(function(module) {
  var projView = {};
  //Clear pre-existing HTML out of section w/ ID 'projects'
  var reProj = function() {
    var $projx = $('#projects');
    $projx.find('ul').empty();
  };
  //Compile template for section displaying projects
  var render2 = Handlebars.compile($('#template2').text());

  //Set up projects page in DOM and display in browser
  projView.index = function() {
    aboutView.index();//Set up animated nav elements

    reProj();

    Handlebars.registerHelper('formatDate', function(date) {
      return moment(date).format('dddd MMMM Do, YYYY');//Initialize date formatting helper for Handlebars
    });

    $('#projects ul').append(
      projs.with('homepage').map(render2)
    );//Filter projects with 'homepage' property and populate them to compiled template

    var testArr = [];//Array for running .reduce() to calculate total size of all repos on user's GitHub
    var $projArr = projs.all;
    $projArr.map(function(item) {testArr.push(item.size);});//Push repo sizes to array
    var sizeAll = testArr.reduce(function(a,b) {return a + b;});//Sum sizes of all repos in array
    $('#totalSize').html('(Out of ' + '<b>' + parseInt((sizeAll/1000)) + ' MB</b> total)');//Display results in browser

  };

  module.projView = projView;
})(window);
