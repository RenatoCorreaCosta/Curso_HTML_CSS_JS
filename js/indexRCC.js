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
function divide (){
    var result = parseInt(document.getElementById("txtNumber1").value)/parseInt(document.getElementById("txtNumber2").value);
    alert("Resultado: " + result);
    console.log("Resultado: " + result);
}
function multiplica (){
    var result = parseInt(document.getElementById("txtNumber1").value) * parseInt(document.getElementById("txtNumber2").value);
    alert("Resultado: " + result);
    console.log("Resultado: " + result);
}

//exFor (loop)
function getSexo(){
    var results = document.getElementsByName("sexo");
    var finalResult;

    for (i = 0; i < results.length; i++) {
        if (results[i].type == "radio" && results[i].checked) {
            finalResult = results[i].value;
        }
    }
    alert("Resultado:" + finalResult);
}

function getOndaMentawai(){
    var results = document.getElementsByName("ondas");
    var finalResult;

    for (i = 0; i < results.length; i++) {
        if (results[i].type == "radio" && results[i].checked) {
            finalResult = results[i].value;
        }
    }
    alert("Resultado:" + finalResult);
}

function testeForIn (){
    var arrayTeste =["Gremio","Imortal","Total"];

    for (var indiceArray in arrayTeste)
        alert(arrayTeste[indiceArray]);
}

function exibeCabecalhos(){
    for (i=1; i<4; i++){
        document.write("<h" + i +"> Cabelçalho </h>")
    }
}

function calculaMediaAlunos() {
    var results = document.getElementsByName("alunos");
    var totalNotas = null;
    var mediaNotas = 0;

    for (i = 0; i < results.length; i++) {
        if (results[i].type == "number") {
            //alert("parseFloat(results[i].value: " + parseFloat(results[i].value));

           if (parseFloat(results[i].value)) {
                totalNotas += parseFloat(results[i].value);
           }
        }
    }
    if (totalNotas){
        mediaNotas = totalNotas / results.length;
        document.getElementById("txtMedia").value = mediaNotas;
        alert("Notas (total): " + totalNotas);
        alert("Média final dos alunos: " + mediaNotas);
    }else{
        alert ("Insira pelo menos uma nota");
        document.getElementById("nota01").focus();
    }
}

function consisteNota (nota){
    if (parseFloat(document.getElementById(nota).value) >10 || parseFloat(document.getElementById(nota).value) < 0){
        document.getElementById(nota).value = null;
        alert ("nota inválida");
        document.getElementById(nota).focus();
    }
}

function carregaImagens() {
    var array1 = new Array(5);
    //array1 = ["teste","ola","bom dia","tarde","noite"]

    for (var ind =0; ind < array1.length; ind++){
       array1[ind] = new Image();
       array1[ind].src = "../images/img" + ind + ".png";
       //alert(array1[ind].src);
    }
    var image;
    var img;
    for (var ind =0; ind < array1.length; ind++){
        img = "imagem"+ (ind+1);
        image = document.getElementById(img);
        image.src = array1[ind].src;
    }
    //documet.getElementById("img1").setAttribute("src",array1[0].src);
}


function trocaImagem(element){
    //var img = document.getElementByName(element.name)[element.index];
    //alert(element.name + " - " + element.id);

    var result = document.getElementsByName(element.name);

    var nextImg;
    var indexImgAtual = parseInt(element.id.substr(length-1,1)) - 1;

    //alert ("indexImgAtual: " + indexImgAtual);

    nextImg = indexImgAtual + 1;
    if (nextImg > 4) nextImg = 0;

    //alert("indexImgAtual: " + indexImgAtual + "  -- nextImg: " + nextImg); //result[2].src);

    //altert(result[2].value);

  //  var nextImg = document.getElementByName(element.name)[2]; //[element.index];

    element.src = result[nextImg].src;


//    Math.random()

    //alert(img.src);
    //img.src = document.getElementByName(element.name)[element.index+1].src;

    /*var objNovoParagrafo = document.createElement('p');
    var strTexto = document.createTextNode('Loner Surfer');
    objNovoParagrafo.appendChild(strTexto);
    document.getElementById("pPrinc").appendChild(objNovoParagrafo); */
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