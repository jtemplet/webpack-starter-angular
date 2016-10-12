var angular = require('angular');
var uiRouter = require('angular-ui-router');
var contactComponent = require('./contact.component');

var contactModule = angular.module('contact', [
  uiRouter
])

.config(function($stateProvider) {
  $stateProvider
    .state('contact', {
      url: '/contact',
      template: '<contact></contact>'
    });
})

.component('contact', contactComponent);

module.exports = contactModule;
