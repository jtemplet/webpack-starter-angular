var angular = require('angular');
var UserFactory = require('./user.factory');

var userModule = angular.module('user', [])

.factory('User', UserFactory);

module.exports = userModule;
