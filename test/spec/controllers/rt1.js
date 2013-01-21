'use strict';

describe('Controller: Rt1Ctrl', function() {

  // load the controller's module
  beforeEach(module('angIssueApp'));

  var Rt1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    Rt1Ctrl = $controller('Rt1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
