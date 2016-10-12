require('jquery');
require('bootstrap/dist/css/bootstrap.min.css');
require('angular');
// var angular = require('angular');
var uiRouter = require('angular-ui-router');
var AppComponent = require('./app.component.js');
var Common = require('./common/common');
var Components = require('./components/components');
require('./styles.scss');

angular.module('myApp', [uiRouter, Common.name, Components.name])
    .directive('app', AppComponent);