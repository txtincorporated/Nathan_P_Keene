var projView = {};

projView.navigador = function() {
  $('.wk').on('click', function() {
    $('#projects').show().siblings().hide();
  });
  $('#name').on('click', function() {
    $('#about').show().siblings().hide();
  });
};

$(document).ready(function() {
  projView.navigador();
});
