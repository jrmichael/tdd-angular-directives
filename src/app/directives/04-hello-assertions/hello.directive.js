angular.module('tdd')
  .directive('ahoj', function () {
    return {
      restrict: 'E',
      scope: {name: "@"},
      templateUrl: 'app/directives/04-hello-assertions/hello.tmpl.html'

    };
  });
