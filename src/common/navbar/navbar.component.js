var template = require('./navbar.html');
var controller = require('./navbar.controller');

var navbarComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

module.exports = navbarComponent;
