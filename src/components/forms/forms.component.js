var template = require('./forms.html');
var controller = require('./forms.controller');

var formsComponent = {
  restrict: 'E',
  scope: {},
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

module.exports = formsComponent;
