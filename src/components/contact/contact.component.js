var template = require('./contact.html');
var controller = require('./contact.controller');

var contactComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

module.exports = contactComponent;
