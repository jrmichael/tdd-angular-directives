angular.module('tdd')
  .directive('hola', function () {
    return {
      restrict: 'E',
      scope: {name: "@"},
      template: '<div>Hola {{name}}!</div>'
    };
  });
