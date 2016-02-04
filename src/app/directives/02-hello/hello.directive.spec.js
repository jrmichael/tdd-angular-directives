describe('Hola directive', function() {
  var scope, compile;

  beforeEach(module('tdd'));

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('should display hello to the World in Spanish', function() {
    scope.name = 'mundo';

    var element = create('<hola name="{{name}}"></hola>');

    expect(element.html()).toContain("Hola mundo!");
  });

  var create = function(html) {
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
