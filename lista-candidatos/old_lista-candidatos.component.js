'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('testApp').
  component('listaCandidatos', {
    template:
        '<ul>' +
          '<li ng-repeat="candidato in $ctrl.candidatos">' +
            '<span>{{candidato.nombre}}</span>' +
            '<img ng-src="{{candidato.img}}" title="{{candidato.nombre}}" />' +
          '</li>' +
        '</ul>',
    controller: function ListaCandidatosController() {
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
    }
  });
