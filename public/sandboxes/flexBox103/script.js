// Sandbox for flexBox101
$(document).ready(function() {
  console.log('Loaded');
  $('#fixIt').animate({marginTop: '+=5%'}, 'slow').delay(7000).fadeOut(6500).animate({marginTop: '-=5%'}, 2500).fadeIn();
}
);

$('#holder').on('click', function() {
  console.log('Clicked');
  $('#fixIt').animate({marginTop: '+=5%'}, 'fast').delay(5000).animate({marginTop: '-=5%', opacity: 0}, 2500).css({opacity: '1'});
});
