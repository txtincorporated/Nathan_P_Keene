(function(module) {
  var projs = {};
  projs.all = [];

  projs.getProjects = function(callback) {
    if (!projs.all[0]) {
      console.log(projs.all);
      $.getJSON('https://api.github.com/user/repos?access_token=' + githubToken, function(data) {
        $.each(data, function(index, value) {
          projs.all.push(value);
        });
      });
    }
    callback();
  };

  projs.with = function(attr) {
    return projs.all.filter(function(proj) {
      return proj[attr];
    });
  };

  module.projs = projs;
})(window);
