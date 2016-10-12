var angular = require('angular');
var uiRouter = require('angular-ui-router');
var heroComponent = require('./hero.component');

var heroModule = angular.module('hero', [
  uiRouter
])

.directive('hero', heroComponent);

module.exports = heroModule;
