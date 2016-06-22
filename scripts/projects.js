(function(module) {
  var projs = {};
  projs.all = [];

  projs.getProjects = function(callback) {
    $.getJSON('https://api.github.com/user/repos?access_token=' + githubToken, function(data) {
      $.each(data, function(index, value) {
        projs.all = value;
      });
    }).done(function() {
      callback();
    });
  };

  projs.with = function(attr) {
    return projs.all.filter(function(proj) {
      return proj[attr];
    });
  };

  module.projs = projs;
})(window);
