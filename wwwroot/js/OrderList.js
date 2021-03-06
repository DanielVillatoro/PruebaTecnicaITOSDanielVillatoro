/**
 * Funcion que ordena y muestra la lista de numeros del 1 al 100 ordenada/desordenada en un table visualmente
 * @param 
*/
const GetList = () => {
    let arrayInt = [];
    let htmlData = "";
    var element;
    for (var i = 0; i < 20; i++) {
        element = Math.trunc(Math.random() * (101 - 1) + 1)
        htmlData += ' <li class="list-group-item">' + element + '</li>';
        arrayInt.push(element);
    }
    $("#firtsList").html(htmlData);
    for (var x = 0; x < arrayInt.length; x++) {
        var value = arrayInt[x];
        for (var j = x - 1; j >= 0 && (arrayInt[j] > value); j--) {
            arrayInt[j + 1] = arrayInt[j];
        }
        arrayInt[j + 1] = value;
    }
    htmlData = "";
    for (var k = 0; k < arrayInt.length; k++) {
        htmlData += ' <li class="list-group-item">' + arrayInt[k] + '</li>';
    }
    $("#secondList").html(htmlData);
    console.log(arrayInt);
}