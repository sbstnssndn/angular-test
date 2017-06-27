'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('listaCandidatos').
  component('listaCandidatos', {
    // Note: The URL is relative to our `index.html` file
    templateUrl: 'lista-candidatos/lista-candidatos.template.html',
    controller: ['Candidato',
      function ListaCandidatosController(Candidato) {
        this.candidatos = Candidato.query();
          /*
          mostrar sólo los primeros 5 resultados
            self.candidatos = response.data.slice(0, 5);
          */
      /*
      this.candidatos = [
        {
          nombre: 'Candidato Uno',
          img: 'img/1.jpg'
        }, {
          nombre: 'Candidato Dos',
          img: 'img/2.jpg'
        }, {
          nombre: 'Candidato Tres',
          img: 'img/3.jpg'
        }, {
          nombre: 'Candidato Cuatro',
          img: 'img/4.jpg'
        }, {
          nombre: 'Candidato Cinco',
          img: 'img/5.jpg'
        }
      ];
      */
      }
    ]
  });
