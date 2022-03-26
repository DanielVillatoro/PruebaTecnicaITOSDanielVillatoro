$("#yearInput").val(new Date().getFullYear());
/**
 * Funcion que ingresa el resultado de la operacion en un input de resultado.
 * @param 
*/
const GetResult = () => {
    const year = $("#yearInput").val();
    if (verifiedYear(year)) {
        $("#resultInput").val("Es un año bisiesto.")
    }
    else {
        $("#resultInput").val("No es un año bisiesto.")
    }
}

/**
 * Funcion que verifica si un año es bisiesto.
 * @param {int} listA un año del calendario gregoriano.
 * @return true si es un año bisiesto y false si no lo es.
*/
const verifiedYear = (year) => {
    return (year % 400 === 0) ? true :
        (year % 100 === 0) ? false :
            year % 4 === 0;
};

/**
 * Funcion limpia el input del resultado.
 * @param 
*/
const cleanInput = () => {
    $("#resultInput").val("");
}