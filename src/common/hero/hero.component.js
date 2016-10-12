var template = require('./hero.jade');
var controller = require('./hero.controller');

var heroComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

module.exports = heroComponent;
