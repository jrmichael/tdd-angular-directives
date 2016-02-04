angular.module('tdd')
  .directive('ciao', function () {
    return {
      restrict: 'E',
      scope: {name: "@"},
      template: '<div style="color: blue" ng-if="nameIsNotEmpty()" ng-click="selected()">Ciao {{name}}!</div>',
      link: function ($scope, element) {
        $scope.nameIsNotEmpty = function () {
          return $scope.name && $scope.name.length;
        };

        $scope.selected = function () {
          element.attr('class', 'selected');
        }
      }

    };
  });
