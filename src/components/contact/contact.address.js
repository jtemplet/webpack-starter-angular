var angular = require('angular');
var uiRouter = require('angular-ui-router');
var contactAddressComponent = require('./contact.address.component');

var contactAddressModule = angular.module('contactAddress', [
  uiRouter
])

.config(function($stateProvider) {
  $stateProvider
    .state('contact.address', {
      url: '/address',
      template: '<address></address>'
    });
})

.component('address', contactAddressComponent);

module.exports = contactAddressModule;
