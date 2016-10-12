var angular = require('angular');
var Home = require('./home/home');
var Contact = require('./contact/contact');
var ContactAddress = require('./contact/contact.address');
var ContactForm = require('./contact/contact.form');
var Github = require('./github/github');
var Forms = require('./forms/forms');
var New = require('./new/new');

module.exports = angular.module('app.components', [
  Contact.name,
  ContactAddress.name,
  ContactForm.name,
  Home.name,
  Github.name,
  Forms.name,
  New.name
]);
