var template = require('./github.html');
var controller = require('./github.controller');

var githubComponent = {
  restrict: 'E',
  scope: {},
  template: template,
  controller: controller,
  controllerAs: 'vm',
  bindToController: true
};

module.exports = githubComponent;
