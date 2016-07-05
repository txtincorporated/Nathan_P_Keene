var projects = [];

function Project(opts) {
  this.completed = opts.completed;
  this.projName = opts.projName;
  this.projType = opts.projType;
  this.required = opts.required;
  this.narrative1 = opts.narrative1;
  this.narrative2 = opts.narrative2;
  this.narrative3 = opts.narrative3;
  this.graphic = opts.graphic;
  this.link = opts.link;
}

Project.prototype.toHtml = function () {
  var projTemplate = $('#template').html();
  var templateScript = Handlebars.compile(projTemplate);
  var newTemplate = templateScript(this);

  return newTemplate;
};

projectStack.sort(function(a,b) {
  return (new Date(b.completed)) - (new Date(a.completed));
});

projectStack.forEach(function(ele) {
  projects.push(new Project(ele));
});
console.log(projects);

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
  // console.log(a);
});
