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

  return this;
}

Project.prototype.toHtml = function () {
  var $newProject = $('article.template').clone();

  $newProject.attr('data-category',this.projType);
  $('.template h2').text(this.projName);
  $('.template #type').append(this.projType);
  $('.template #req').append(this.required);
  $('.template #ustory1').append(this.narrative1);
  $('.template #ustory2').append(this.narrative2);
  $('.template #ustory3').append(this.narrative3);
  $('.template .sample').attr('src',this.graphic);
  $('.template a').attr('href',this.link);

  $('article').removeClass('template');

  return $newProject;
};

// // projectStack.sort(function(a,b) {
//   return (new Date(b.completed)) - (new Date(a.completed));
// });

projectStack.forEach(function(ele) {
  projects.push(new Project(ele));
});
console.log(projects);

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
  // console.log(a);
});
