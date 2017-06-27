'use strict';

angular.
  module('core.candidato').
  factory('Candidato', ['$resource',
    function($resource) {
      return $resource('candidatos/:candidatoId.json', {}, {
        query: {
          method: 'GET',
          params: {candidatoId: 'candidatos'},
          isArray: true
        }
      });
    }
  ]);
