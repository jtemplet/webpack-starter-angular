var angular = require('angular');
var uiRouter = require('angular-ui-router');
var navbarComponent = require('./navbar.component');

var navbarModule = angular.module('navbar', [
  uiRouter
])

.directive('navbar', navbarComponent);

module.exports = navbarModule;
