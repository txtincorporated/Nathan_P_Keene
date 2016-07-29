(function(module) {
  var projs = {};
  projs.all = [];

  projs.getProjects = function(callback) {
    $.getJSON('/github/user/repos', function(data) {
      $.each(data, function(index, value) {
        projs.all.push(value);
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
