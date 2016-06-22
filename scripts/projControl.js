projControl.index = function() {
  $('#projects').show().siblings().hide();
  projs.getProjects(projView.index);//TODO: create projView.index in a file called projView.js
};
