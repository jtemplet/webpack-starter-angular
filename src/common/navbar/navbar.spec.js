var NavbarModule = require('./navbar');
var NavbarController = require('./navbar.controller');
var NavbarComponent = require('./navbar.component');
var NavbarTemplate = require('./navbar.html');

describe('Navbar', function() {
  var makeController;

  beforeEach(window.module(NavbarModule.name));  // eslint-disable-line
  beforeEach(inject(function() {
    makeController = function() {
      return new NavbarController();
    };
  }));

  describe('Module', function() {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', function() {
    // controller specs
    it('has a name property', function() { // erase if removing this.name from the controller
      var controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Component', function() {
    // component/directive specs
    var component = NavbarComponent();

    it('includes the intended template',function() {
      expect(component.template).to.equal(NavbarTemplate);
    });

    it('uses `controllerAs` syntax', function() {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', function() {
      expect(component.controller).to.equal(NavbarController);
    });
  });
});
