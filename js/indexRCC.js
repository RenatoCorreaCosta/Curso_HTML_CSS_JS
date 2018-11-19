function soma (){
    var result = parseInt(document.getElementById("txtNumber1").value) + parseInt(document.getElementById("txtNumber2").value);
    alert("Resultado: " + result);
    console.log("Resultado: " + result);
}

function subtrai (){
    var result = parseInt(document.getElementById("txtNumber1").value) - parseInt(document.getElementById("txtNumber2").value);
    alert("Resultado: " + result);
    console.log("Resultado: " + result);
}

//exSwtichCase
function getSexo(){
    var results = document.getElementsByName("sexo");
    var finalResult;

    for (i = 0; i < results.length; i++) {
        if (results[i].type == "radio" && results[i].checked) {
            finalResult = results[i].value;
        }
    }

    alert("Resultado:" + finalResult);

    /*
    switch (new date().getDay()) {
        case 1:
            result = "Segunda";
            break;
        case 2:
            result = "Terça";
            break;
        default:
            result = "Sem definição"
    }*/
}

//exSwtichCase
/*function getDiaSemana{
    var result = "";
    switch (new date().getDay()) {
        case 1:
            result = "Segunda";
            break;
        case 2:
            result = "Terça";
            break;
        default:
            result = "Sem definição"
    }
}*/