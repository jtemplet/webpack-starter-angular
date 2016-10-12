var FormsModule = require('./forms');
var FormsController = require('./forms.controller');
var FormsComponent = require('./forms.component');
var FormsTemplate = require('./forms.html');

describe('Forms', function() {
  var makeController;

  beforeEach(window.module(FormsModule.name));  // eslint-disable-line
  beforeEach(inject(function() {
    makeController = function() {
      return new FormsController();
    };
  }));

  describe('Module', function() {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', function() {
    // controller specs
    it('has a name/from/schema/model property', function() { // erase if removing this.name from the controller
      var controller = makeController();
      expect(controller).to.have.property('name');
      expect(controller).to.have.property('form');
      expect(controller).to.have.property('schema');
      expect(controller).to.have.property('model');
    });
  });

  describe('Template', function() {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has schema/form/model in template', function () {
      expect(FormsTemplate).to.match(/\s?vm\.schema\s?/g);
      expect(FormsTemplate).to.match(/\s?vm\.form\s?/g);
      expect(FormsTemplate).to.match(/\s?vm\.model\s?/g);
    });
  });


  describe('Component', function() {
    // component/directive specs
    var component = FormsComponent;

    it('includes the intended template', function() {
      expect(component.template).to.equal(FormsTemplate);
    });

    it('uses `controllerAs` syntax', function() {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', function() {
      expect(component.controller).to.equal(FormsController);
    });
  });

});
