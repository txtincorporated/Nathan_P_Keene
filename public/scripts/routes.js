page('/', aboutControl.index);//Link to index/"about" section
page('/projx', projControl.index);//Link to "projx" section
page('*', notFound);//404 not found

page();//Activate page.js

function notFound() {
  showSection('fourOfour');
}

function showSection(tag) {
  aboutControl.index();
  $('#' + tag).show().siblings().hide();
};
