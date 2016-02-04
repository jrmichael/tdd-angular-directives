describe('Ahoj directive', function () {
  var scope, compile;

  beforeEach(module('tdd'));

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('should display hello to the World in Czech', function () {
    scope.name = 'svet';

    var element = create('<ahoj name="{{name}}"></ahoj>');

    expect(element.html()).toContain("Ahoj svet!");
  });


  var create = function (html) {
    // Step 1: parse HTML into DOM element
    var element = angular.element(html);

    // Step 2: compile the template
    var linkFn = compile(element);

    // Step 3: link the compiled template with the scope.
    linkFn(scope);

    //Step 4: Processes all of the watchers of the current scope and its children
    scope.$digest();

    return element;
  };

});
