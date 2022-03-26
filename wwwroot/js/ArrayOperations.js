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

const GetChart=() =>{
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    result = characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}


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

const IntersectionAB = (listA, listB) => {
    const intersectionABArray = new Set((listA.filter(value => listB.includes(value))));
    let htmlData = "";
    for (var element of intersectionABArray) {
        htmlData += ' <li class="list-group-item">' + element + '</li>';
    }
    $("#intersectionList").html(htmlData);
}

const DifferenceAB = (listA, listB) => {
    const differenceABArray = new Set((listA.filter(elemento => listB.indexOf(elemento) == -1)));
    let htmlData = "";
    for (var element of differenceABArray) {
        htmlData += ' <li class="list-group-item">' + element + '</li>';
    }
    $("#differenceList").html(htmlData);
}

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