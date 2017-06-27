var namesArray = ["tom", "john"];

var newArray = namesArray.map(function(item){
   return {'name': item}   
})

console.log(JSON.parse(JSON.stringify(newArray)));


var jsonData = $.ajax({
	url: "servicio.json",
	dataType: "json",
	async: false
}).responseJSON;

function procesarFecha(json) {
	var category = [];
	for (var i = 0, l = json.length; i < l; i++) {
		category.push('{ "label": "'+json[i].fecha+'" }');
	}
	return category;
}

function procesarAprob(json, atributo) {
	var datos = [];
	
	if(atributo === 'aprobacion'){
		for (var i = 0, l = json.length; i < l; i++) {
			datos.push('{ "label": "'+json[i].aprobacion+'" }');
		}
	} else if(atributo === 'desaprobacion'){
		for (var i = 0, l = json.length; i < l; i++) {
			datos.push('{ "label": "'+json[i].desaprobacion+'" }');
		}	
	} else {
		return "Error: Ingresa el atributo correcto.";
	}
	return datos;
}

var datosFinal = '{'+
    '"chart": {'+
        '"caption": "Nivel de Aprobaci\xF3n",'+
        '"xAxisname": "Fecha",'+
        '"yAxisName": "Aprobaci\xF3n (%)",'+
        '"numberSuffix": "%",'+
        '"plotFillAlpha": "80",'+
        '"paletteColors": "#0075c2,#ff0000",'+
        '"baseFontColor": "#333333",'+
        '"baseFont": "Helvetica Neue,Arial",'+
        '"captionFontSize": "14",'+
        '"subcaptionFontSize": "14",'+
        '"subcaptionFontBold": "0",'+
        '"showBorder": "0",'+
        '"bgColor": "#ffffff",'+
        '"showShadow": "0",'+
        '"canvasBgColor": "#ffffff",'+
        '"canvasBorderAlpha": "0",'+
        '"divlineAlpha": "100",'+
        '"divlineColor": "#999999",'+
        '"divlineThickness": "1",'+
        '"divLineDashed": "1",'+
        '"divLineDashLen": "1",'+
        '"usePlotGradientColor": "0",'+
        '"showplotborder": "0",'+
        '"valueFontColor": "#ffffff",'+
        '"placeValuesInside": "1",'+
        '"showHoverEffect": "1",'+
        '"rotateValues": "1",'+
        '"showXAxisLine": "1",'+
        '"xAxisLineThickness": "1",'+
        '"xAxisLineColor": "#999999",'+
        '"showAlternateHGridColor": "0",'+
        '"legendBgAlpha": "0",'+
        '"legendBorderAlpha": "0",'+
        '"legendShadow": "0",'+
        '"legendItemFontSize": "10",'+
        '"legendItemFontColor": "#666666"'+
    '},'+
    '"categories": ['+
        '{'+
            '"category": ['+procesarFecha(jsonData)+']'+
        '}'+
    '],'+
    '"dataset": ['+
        '{'+
            '"seriesname": "Aprobaci\xF3n",'+
            '"data": ['+procesarAprob(jsonData, 'aprobacion')+']'+
        '},'+
        '{'+
            '"seriesname": "Desaprobaci\xF3n",'+
            '"data": ['+procesarAprob(jsonData, 'desaprobacion')+']'+
        '}'+
    ']'+
'}'


/*
function procesarJson(json) {
	var datos = [];
	for (var i = 0, l = json.length; i < l; i++) {
		datos.push({ c: [ {v: json[i].fecha }, {v: json[i].aprobacion }, {v: json[i].desaprobacion }]});
	}
	return datos;
}

var datosPre = procesarArray(jsonData);

var datosFinal = "{\"cols\": [ {\"id\": \"f\", \"label\": \"Fecha\", \"type\": \"string\"}, {\"id\": \"s\", \"label\": \"Aprobaci\xF3n\", \"type\": \"number\"}, {\"id\": \"r\", \"label\": \"Desaprobaci\xF3n\", \"type\": \"number\"} ], \"rows\": [" + datosPre + " ]}";


function drawChart() {
	var options = {
	  title : 'Gr\xE1fica Hist\xF3rica de Aprobaci\xF3n',
	  vAxis: {title: 'Porcentaje'},
	  hAxis: {title: 'Fecha'},
	  seriesType: 'bars'
	};
	var data = new google.visualization.DataTable(datosFinal);

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}
*/
/*
function procesarArray(json) {
	var datos = [];
	for (var i = 0, l = json.length; i < l; i++) {
		datos.push("{ \"c\": [ {\"v\": \"" + json[i].fecha + "\"}, {\"v\": " + json[i].aprobacion + "% }, {\"v\": " + json[i].desaprobacion + "% }]}");
	}
	return datos;
}

var datosPre = procesarArray(jsonData);

var datosFinal = "{\"cols\": [ {\"id\": \"f\", \"label\": \"Fecha\", \"type\": \"string\"}, {\"id\": \"s\", \"label\": \"Aprobación\", \"type\": \"number\"}, {\"id\": \"r\", \"label\": \"Desaprobación\", \"type\": \"number\"} ], \"rows\": [" + datosPre + " ]}";

function drawChart() {
	var options = {
	  title : 'Grafica Historica de Aprobación',
	  vAxis: {title: 'Porcentaje'},
	  hAxis: {title: 'Fecha'},
	  seriesType: 'bars'
	};
	var data = new google.visualization.DataTable(datosFinal);

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}*/