var angular = require('angular');
var uiRouter = require('angular-ui-router');
var contactFormComponent = require('./contact.form.component');
require('angular-sanitize');
require('script!tv4/tv4.js');
require('script!objectpath/lib/ObjectPath');
require('script!angular-schema-form/dist/schema-form');
require('script!angular-schema-form/dist/bootstrap-decorator');
// XXX: regular import do not work!
// import schemaForm from 'angular-schema-form/dist/schema-form';
// import 'angular-schema-form/dist/bootstrap-decorator';

var contactFormModule = angular.module('contactForm', [
  uiRouter,
  'schemaForm'
])

.config(function($stateProvider) {
  $stateProvider
    .state('contact.form', {
      url: '/form',
      template: '<contactform></contactform>'
    });
})

.component('contactform', contactFormComponent);

module.exports =  contactFormModule;
