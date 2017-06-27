'use strict';

angular.
  module('core.aprobacion').
  factory('Aprobacion', ['$resource',
    function($resource) {
      return $resource('aprobaciones/:candidatoId.json', {}, {
        query: {
          method: 'GET',
          params: {candidatoId: 'aprobaciones'},
          isArray: true
        }
      });
    }
  ]);
