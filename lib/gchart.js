// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages':['corechart']});
  
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

var jsonData = $.ajax({
	url: "http://localhost:8080/votweet-backend-master/metricasCandidatos/1/aprobacionNacional",
	dataType: "json",
	async: false
}).responseJSON;

function procesarArray(json) {
	var datos = [];
	for (var i = 0, l = json.length; i < l; i++) {
		datos.push("{ \"c\": [ {\"v\": \"" + json[i].fecha + "\"}, {\"v\": " + json[i].aprobacion + "}, {\"v\": " + json[i].desaprobacion + "}]}");
	}
	return datos;
}

var datosPre = procesarArray(jsonData);

var datosFinal = "{\"cols\": [ {\"id\": \"f\", \"label\": \"Fecha\", \"type\": \"string\"}, {\"id\": \"s\", \"label\": \"Aprobación\", \"type\": \"number\"}, {\"id\": \"r\", \"label\": \"Desaprobación\", \"type\": \"number\"} ], \"rows\": [" + datosPre + " ]}";

function drawChart() {
	/*
	var jsonData = $.ajax({
	  url: "datos.json",
	  dataType: "json",
	  async: false
	  }).responseText;
	*/
	// Create our data table out of JSON data loaded from server.
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
}