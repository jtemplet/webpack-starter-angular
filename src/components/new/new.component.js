var template = require('./new.html');
var controller = require('./new.controller');

var newComponent = {
  restrict: 'E',
  scope: {},
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

module.exports = newComponent;
