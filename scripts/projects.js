(function(module) {
  var projs = {};
  projs.all = [];

  projs.getProjects = function(callback) {
    $.getJSON('/data/projectGuts.json', function(data) {
      $.each(data, function(index, value) {
        console.log(data);
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
