var add = "";
var i = 1;
var j = 1;
var resultadoteste = "";
var vetorteste = [];
var k = 1;
var positivoteste = "";
var vetorpositivo = [];
var negativoteste = "";
var vetornegativo = [];
var string = "";
var stringn = "";

function adiciona(){
add=document.getElementById("addteste").value;
var item = document.createElement("li")
var els = document.getElementsByTagName("ul")

els[0]
els[0].appendChild(item)
item.innerHTML = "Caso de Teste "+i+" : "+add;
i++;
var numtestes = i;
}

function proxteste(){

    j++;
    var labelteste = document.getElementById("labeltest");
    labelteste.innerHTML = ("Caso de Teste "+j+":" );
    
}

function enviar(){
   
    resultadoteste=[k,document.getElementById("enviarteste").value];
    vetorteste.push(resultadoteste);
    console.log(vetorteste);
    k++;
    document.getElementById("enviarteste").value = "";
}

function positivo(){
    positivoteste=[document.getElementById("positivoteste").value];
    vetorpositivo.push(positivoteste);
    console.log(vetorpositivo);
    limpatxt()
}

function negativo(){
    negativoteste=[document.getElementById("negativoteste").value];
    vetornegativo.push(negativoteste);
    limpatxt()
}

function ficha(){
    string = vetorpositivo.join("<br>Casos de teste positivo: ");
	var label = document.getElementById("ficha");
    label.innerHTML = ("Caso de teste positivo: "+string);
    stringn = vetornegativo.join("<br>Casos de teste negativo: ");
	var labeln = document.getElementById("fichan");
    labeln.innerHTML = ("Caso de teste negativo: "+stringn);
}

function limpatxt(){
	document.getElementById ("positivoteste").value = "";
	document.getElementById ("negativoteste").value = "";
}