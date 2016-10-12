var angular = require('angular');
var uiRouter = require('angular-ui-router');
var githubComponent = require('./github.component');
var githubService = require('./github.service');

var githubModule = angular.module('github', [
  uiRouter
])

.config(function($stateProvider) {
  $stateProvider
    .state('github', {
      url: '/github',
      template: '<github></github>'
    });
})

.component('github', githubComponent)
.service('githubService', githubService);

module.exports = githubModule;
