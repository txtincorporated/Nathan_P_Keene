page('/', aboutControl.index);//Link to index/"about" section
page('/projx', projControl.index);//Link to "projx" section
page('*', notFound);//404 not found

page();//Activate page.js

//Call function to display 404 page
function notFound() {
  showSection('fourOfour');
}

//Function to display 404 page
function showSection(tag) {
  aboutControl.index();
  $('#' + tag).show().siblings().hide();
};
