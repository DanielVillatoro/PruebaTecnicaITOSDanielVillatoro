/**
 * Funcion que crea una tabla con dimensiones ingresadas por medio de 2 inputs.
 * @param
*/
const GetTable = () => {
    const colTotal = $("#colInput").val();
    const rowTotal = $("#rowInput").val();
    var htmlData = "<tr>";
    for (var i = 0; i < colTotal; i++) {
        htmlData += "<th scope='col'>";
        htmlData += "Col-" + i;
        htmlData += "</th>";
    }
    htmlData += "</tr>";
    $("#theadTable").html(htmlData);
    htmlData = "";
    for (var j = 0; j < rowTotal; j++) {
        htmlData += "<tr>";
        for (var x = 0; x < colTotal; x++) {
            htmlData += "<td scope='col'>";
            htmlData += x +"X"+j;
            htmlData += "</td>";
        }
        htmlData += "</tr>";
    }
    $("#tbodyTable").html(htmlData);
}