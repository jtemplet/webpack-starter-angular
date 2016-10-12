var angular = require('angular');
var Navbar = require('./navbar/navbar');
var Hero = require('./hero/hero');
var User = require('./user/user');

module.exports = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name
]);
// export default angular.module('app.common', [
//   Navbar.name,
//   Hero.name,
//   User.name
// ]);
