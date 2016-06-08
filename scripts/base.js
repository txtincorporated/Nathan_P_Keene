var projects = [];

function Project(details) {
  this.completed = details.completed;
  this.projName = details.projName;
  this.projType = details.projType;
  this.required = details.required;
  this.narrative1 = details.narrative1;
  this.narrative2 = details.narrative2;
  this.narrative3 = details.narrative3;
  this.graphic = details.graphic;
  this.link = details.link;

  return this;
}

Project.prototype = function () {
  var $newProject = $('article.template').clone();

  $newProject.attr('data category',this.projType);
  $('.template h2').text(this.projName);
  $('.template#type').append(this.projType);
  $('.template#req').append(this.required);
  $('.template#ustory1').append(this.narrative1);
  $('.template#ustory2').append(this.narrative2);
  $('.template#ustory3').append(this.narrative3);
  $('.template.sample').attr('src',this.graphic);
  $('.template a').attr('href',this.link);

  $('article').removeClass('template');

  return $newProject;
};

projectStack.sort(function(a,b) {
  return (new Date(b.completed)) - (new Date(a.completed));
});

projectStack.forEach(function(ele) {
  projects.push(Project(ele));
});

projectStack.forEach(function(a) {
  $('.projects').append(a.toHtml());
});
