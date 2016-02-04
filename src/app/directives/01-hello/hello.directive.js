angular.module('tdd')
  .directive('hello', function () {
    return {
      restrict: 'E',
      template: '<div>Hello World!</div>'
    };
  });
