'use strict';

describe('Controller: Rt2Ctrl', function() {

  // load the controller's module
  beforeEach(module('angIssueApp'));

  var Rt2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    Rt2Ctrl = $controller('Rt2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
