var template = require('./contact.form.jade');
var controller = require('./contact.form.controller');

var contactFormComponent = {
  restrict: 'E',
  scope: {},
  template: template,
  controller: controller,
  controllerAs: 'vm',
  bindToController: true
};

module.exports = contactFormComponent;
