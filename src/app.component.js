var template = require('./app.html');

var appComponent = function() {
  return {
    template: template,
    restrict: 'E'
  };
};

module.exports = appComponent;