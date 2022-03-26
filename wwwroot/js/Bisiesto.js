$("#yearInput").val(new Date().getFullYear());

const GetResult = () => {
    const year = $("#yearInput").val();
    if (verifiedYear(year)) {
        $("#resultInput").val("Es un año bisiesto.")
    }
    else {
        $("#resultInput").val("No es un año bisiesto.")
    }
}

const verifiedYear = (year) => {
    return (year % 400 === 0) ? true :
        (year % 100 === 0) ? false :
            year % 4 === 0;
};


const cleanInput = () => {
    $("#resultInput").val("");
}