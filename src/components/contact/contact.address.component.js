var template = require('./contact.address.jade');
var controller = require('./contact.address.controller');

var contactAddressComponent = {
  restrict: 'E',
  scope: {},
  template: template,
  controller: controller,
  controllerAs: 'vm',
  bindToController: true
};

module.exports = contactAddressComponent;
