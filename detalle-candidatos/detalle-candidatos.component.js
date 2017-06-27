'use strict';

angular.
  module('detalleCandidatos').
  component('detalleCandidatos', {
    // idCandidato es el parámetro de la ruta especificado en app.config.js
    templateUrl: 'detalle-candidatos/detalle-candidatos.template.html',
    controller: ['$routeParams', 'Candidato',
      function DetalleCandidatosController($routeParams, Candidato) {
        var self = this;
        self.candidato = Candidato.get({candidatoId: $routeParams.candidatoId}, function(candidato){
          self.setImage(candidato.cdtoImagen);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
