(function(module) {
  var projs = {};
  projs.all = [];

  //REST call to GitHub API to GET all repos for user and push results to an array
  projs.getProjects = function(callback) {
    $.getJSON('/github/user/repos', function(data) {
      $.each(data, function(index, value) {
        projs.all.push(value);
      });
    }).done(function() {
      callback();
    });
  };

  //Filter array of repos as specified in function calling this HOF
  projs.with = function(attr) {
    return projs.all.filter(function(proj) {
      return proj[attr];
    });
  };

  module.projs = projs;
})(window);
