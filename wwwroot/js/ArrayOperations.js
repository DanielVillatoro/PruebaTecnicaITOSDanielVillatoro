/**
 * Funcion que crea 2 listas con letras del abecedario totalmente aleatorias.
 * @param.
*/
const GetList = () => {
    let arrayA = [];
    let arrayB = [];
    let htmlDataA = "";
    let htmlDataB = "";
    var element;
    for (var i = 0; i < 10; i++) {
        element = GetChart();
        htmlDataA += ' <li class="list-group-item">' + element +'</li>';
        arrayA.push(element);

        element = GetChart();
        htmlDataB += ' <li class="list-group-item">' + element + '</li>';
        arrayB.push(element);
    }
    $("#AList").html(htmlDataA);
    $("#BList").html(htmlDataB);
    UnionAB(arrayA, arrayB);
    IntersectionAB(arrayA, arrayB);
    DifferenceAB(arrayA, arrayB);
    SymmetricalDifferenceAB(arrayA, arrayB);
}

/**
 * Retorna una letra del abecedario totalmente aleatoria.
*/
const GetChart=() =>{
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    result = characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}

/**
 * Funcion que realiza el UNION de ambas listas y la muestra en pantalla mediante un table.
 * @param {Array} listA lista A con letras aleatorias.
 *  * @param {Array} listB lista B con letras aleatorias.

*/
const UnionAB = (listA,listB) => {
    var concatArray = listA.concat(listB);
    var arrayUnique = new Set(concatArray);
    var arrayUnion = [];
    let htmlData = "";
    for (var element of arrayUnique) {
        htmlData += ' <li class="list-group-item">' + element + '</li>';
        arrayUnion.push(element);
    }
    $("#unionList").html(htmlData);
}

/**
 * Funcion que realiza el UNION de ambas listas y la muestra en pantalla mediante un table.
 * @param {Array} listA lista A con letras aleatorias.
 *  * @param {Array} listB lista B con letras aleatorias.

*/
const IntersectionAB = (listA, listB) => {
    const intersectionABArray = new Set((listA.filter(value => listB.includes(value))));
    let htmlData = "";
    for (var element of intersectionABArray) {
        htmlData += ' <li class="list-group-item">' + element + '</li>';
    }
    $("#intersectionList").html(htmlData);
}

/**
 * Funcion que realiza el UNION de ambas listas y la muestra en pantalla mediante un table.
 * @param {Array} listA lista A con letras aleatorias.
 *  * @param {Array} listB lista B con letras aleatorias.

*/
const DifferenceAB = (listA, listB) => {
    const differenceABArray = new Set((listA.filter(elemento => listB.indexOf(elemento) == -1)));
    let htmlData = "";
    for (var element of differenceABArray) {
        htmlData += ' <li class="list-group-item">' + element + '</li>';
    }
    $("#differenceList").html(htmlData);
}

/**
 * Funcion que realiza el UNION de ambas listas y la muestra en pantalla mediante un table.
 * @param {Array} listA lista A con letras aleatorias.
 *  * @param {Array} listB lista B con letras aleatorias.

*/
const SymmetricalDifferenceAB = (listA, listB) => {
    let aUnique = new Set(listA);
    let bUnique = new Set(listB);
    let union = new Set([...aUnique, ...bUnique]);
    let intersection = new Set([...aUnique].filter(x => bUnique.has(x)))
    let symmetricDifference = new Set([...union].filter(x => !intersection.has(x)));
    let htmlData = "";
    for (var element of symmetricDifference) {
        htmlData += ' <li class="list-group-item">' + element + '</li>';
    }
    $("#symmetricalDifferenceList").html(htmlData);
}