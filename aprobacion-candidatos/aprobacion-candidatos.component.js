'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('aprobacionCandidatos').
  component('aprobacionCandidatos', {
    // Note: The URL is relative to our `index.html` file
    templateUrl: 'aprobacion-candidatos/aprobacion-candidatos.template.html',
    controller: ['$scope', '$routeParams', 'Aprobacion',
      function AprobacionCandidatosController($scope, $routeParams, Aprobacion) {
        var self = this;
        $scope.datosFinal = [];

        //$scope.datosJson = 'aprobaciones/'+$routeParams.candidatoId+'.json';

        self.aprobaciones = Aprobacion.query({candidatoId: $routeParams.candidatoId}, function(aprobaciones) {
          $scope.datosFinal = "{"+
              "\"chart\": {"+
                  "\"caption\": \"Nivel de Aprobaci\xF3n\","+
                  "\"xAxisname\": \"Fecha\","+
                  "\"yAxisName\": \"Aprobaci\xF3n (%)\","+
                  "\"numberSuffix\": \"%\","+
                  "\"plotFillAlpha\": \"80\","+
                  "\"paletteColors\": \"#0075c2,#ff0000\","+
                  "\"baseFontColor\": \"#333333\","+
                  "\"baseFont\": \"Helvetica Neue,Arial\","+
                  "\"captionFontSize\": \"14\","+
                  "\"subcaptionFontSize\": \"14\","+
                  "\"subcaptionFontBold\": \"0\","+
                  "\"showBorder\": \"0\","+
                  "\"bgColor\": \"#ffffff\","+
                  "\"showShadow\": \"0\","+
                  "\"canvasBgColor\": \"#ffffff\","+
                  "\"canvasBorderAlpha\": \"0\","+
                  "\"divlineAlpha\": \"100\","+
                  "\"divlineColor\": \"#999999\","+
                  "\"divlineThickness\": \"1\","+
                  "\"divLineDashed\": \"1\","+
                  "\"divLineDashLen\": \"1\","+
                  "\"usePlotGradientColor\": \"0\","+
                  "\"showplotborder\": \"0\","+
                  "\"valueFontColor\": \"#ffffff\","+
                  "\"placeValuesInside\": \"1\","+
                  "\"showHoverEffect\": \"1\","+
                  "\"rotateValues\": \"1\","+
                  "\"showXAxisLine\": \"1\","+
                  "\"xAxisLineThickness\": \"1\","+
                  "\"xAxisLineColor\": \"#999999\","+
                  "\"showAlternateHGridColor\": \"0\","+
                  "\"legendBgAlpha\": \"0\","+
                  "\"legendBorderAlpha\": \"0\","+
                  "\"legendShadow\": \"0\","+
                  "\"legendItemFontSize\": \"10\","+
                  "\"legendItemFontColor\": \"#666666\""+
              "},"+
              "\"categories\": ["+
                  "{"+
                      "\"category\": ["+procesarFecha(aprobaciones)+"]"+
                  "}"+
              "],"+
              "\"dataset\": ["+
                  "{"+
                      "\"seriesname\": \"Aprobaci\xF3n\","+
                      "\"data\": ["+procesarAprob(aprobaciones, "aprobacion")+"]"+
                  "},"+
                  "{"+
                      "\"seriesname\": \"Desaprobaci\xF3n\","+
                      "\"data\": ["+procesarAprob(aprobaciones, "desaprobacion")+"]"+
                  "}"+
              "]"+
          "}";
        });

        function procesarFecha(jsonData) {
        	var category = [];
        	for (var i = 0, l = jsonData.length; i < l; i++) {
        		category.push('{ "label": "'+jsonData[i].fecha+'" }');
        	}
        	return category;
        };

        function procesarAprob(jsonData, atributo) {
        	var datos = [];

        	if(atributo === 'aprobacion'){
        		for (var i = 0, l = jsonData.length; i < l; i++) {
        			datos.push('{ "value": "'+jsonData[i].aprobacion+'" }');
        		}
        	} else if(atributo === 'desaprobacion'){
        		for (var i = 0, l = jsonData.length; i < l; i++) {
        			datos.push('{ "value": "'+jsonData[i].desaprobacion+'" }');
        		}
        	} else {
        		return "Error: Ingresa el atributo correcto.";
        	}
        	return datos;
        };

        //$scope.myJsonString = JSON.parse(JSON.stringify($scope.datosFinal));

        /*
        ESTO FUNCIONA CON UN JSON QUE VIENE BUENO DE "FABRICA"
        $scope.aprobaciones = Aprobacion.get({candidatoId: $routeParams.candidatoId}, function(aprobaciones) {
          //self.graficoAprobacion(aprobaciones);
        });
        */

      }
    ]
  });
