var angular = require('angular');
var uiRouter = require('angular-ui-router');
var newComponent = require('./new.component');

var newModule = angular.module('new', [
  uiRouter
])

.config(function($stateProvider) {
  $stateProvider
    .state('new', {
      url: '/new',
      template: '<new></new>'
    });
})

.component('new', newComponent);

module.exports = newModule;