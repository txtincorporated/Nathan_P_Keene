var p = document.querySelector('p');

var $nav = $('#nav');

var $home = $('#home');
var $about = $('#about');

// $nav.on('click', 'li', function() {
//   console.log('Hello! this = ', this);
//   var id = $(this).data('section');
//   console.log('id = ', id);
//   $('section').fadeOut();
//   $('#'+id).delay(500).fadeIn(1400);
// });

function setRouteMappings() {
  page.base('/');

  page('', home);
  page('home', home);
  page('about', about);
  page('*', notfound); // catch-all

  page();
}

function home() {
  $('section').hide(); // fadeOut(250);
  $('#home').fadeIn(1000);
}

function about() {
  $('section').hide(); // fadeOut(250);
  $('#about').fadeIn(1000);
}

function notfound() {
  p.innerHTML = '<h3>OMG!</h3><p>The page at "'
              + location.hostname + location.pathname + location.search
              + '" can\'t be found (like a bridge over troubled water, ya\' know)!</p>'
              + '<img src="lost.jpg"></img>';
}

setRouteMappings();
