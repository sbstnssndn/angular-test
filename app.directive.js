'use strict';

angular.
  module('testApp').
    directive('graficoAprobacion', function() {
        return {
          restrict: 'A',
          templateUrl: 'grafico.html',
          controller: function() {

          },
          // ese alias es como hacer ng-controller="graficoAprobacion as grafico"
          controllerAs: 'grafico'
        };
    });
