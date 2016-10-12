var angular = require('angular');
var uiRouter = require('angular-ui-router');
var formsComponent = require('./forms.component');
// order important: tv4 -> objectpath -> shemaForm -> shemaForm-bootstrap
require('tv4');
require('objectpath');
var schemaForm = require('angular-schema-form');
require('script!angular-schema-form-bootstrap');

var formsModule = angular.module('forms', [
  schemaForm.name,
  uiRouter
])

.config(function($stateProvider) {
  $stateProvider
    .state('forms', {
      url: '/forms',
      template: '<forms></forms>'
    });
})

.component('forms', formsComponent);

module.exports = formsModule;
