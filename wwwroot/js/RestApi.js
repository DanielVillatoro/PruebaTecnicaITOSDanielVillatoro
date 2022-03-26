/**
 * Funcion que consulta el api de www.banxico.org.mx y muestra los resultados en pantalla.
 * @param
*/
const GetData = () => {
	const actualDate = new Date();
	let actualDateFormat = actualDate.getFullYear() + "-" + (actualDate.getMonth() + 1) + "-" + (actualDate.getDate())
	let firtsDateFormat = actualDate.getFullYear() + "-" + (actualDate.getMonth() + 1) + "-" + (actualDate.getDate()-6)
	$.get("https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos/" + firtsDateFormat + "/" + actualDateFormat + "?token=af9ead1829f7a656c6f3efacb4fa3c68b20a8e7ae7f8f1968ae62f171e06dfd2", function (data, status) {
		console.log(data);
		var series = data.bmx.series[0].datos;
		var htmlData = "";
		//Se carga una tabla con los registros obtenidos
		for (var i in series) {
			var serie = series[i];
			htmlData += "<tr>";
			htmlData += "<td>" + serie.fecha + "</td>";
			htmlData += "<td>" + serie.dato + "</td>";
			htmlData += "</tr>";
		}
		$("#tbodyTable").html(htmlData);
	});
}