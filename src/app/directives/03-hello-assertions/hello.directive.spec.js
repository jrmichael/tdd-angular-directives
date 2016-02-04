describe('Ciao directive', function () {
  var scope, compile;

  beforeEach(module('tdd'));

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('should display hello to the World in Italian', function () {
    scope.name = 'mondo';

    var element = create('<ciao name="{{name}}"></ciao>');

    expect(element.html()).toContain("Ciao mondo!");
  });

  it('should display text in Blue color', function () {
    scope.name = 'mondo';

    var element = create('<ciao name="{{name}}"></ciao>');

    expect(element.find('div')).toHaveCss({color: "blue"});
  });

  it('should not be displayed when no name provided', function () {
    scope.name = '';

    var element = create('<ciao name="{{name}}"></ciao>');

    expect(element.find('div')).not.toExist();
  });

  describe('should not be displayed when', function () {


    var testCases = [{param: null, name: 'null'},
      {param: undefined, name: 'undefined'},
      {param: '', name: 'empty'}];

    testCases.forEach(function (testCase) {
      it('name is ' + testCase.name, function () {
        scope.name = testCase.param;

        var element = create('<ciao name="{{name}}"></ciao>');

        expect(element.find('div')).not.toExist();
      });
    });

  });

  it('should be marked selected after clicking', function () {
    scope.name = 'World';
    var element = create('<ciao name="{{name}}"></ciao>');

    element.find('div').click();

    expect(element).toHaveClass("selected");
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
