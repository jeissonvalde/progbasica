var gravedades = {
	tierra: 9.8,
	marte: 3.7,
	jupiter: 24.8
};

var mipeso, planeta, texto;
var peso_final;

function inicio() {

	btn = document.getElementById("act");

	btn.addEventListener("click", darpeso);
	
}

function darpeso(){

	texto = document.getElementById("text");
	mipeso = document.getElementById("peso");
	planeta = document.getElementById("pla");
	if (planeta == "marte") {
		peso_final = mipeso * gravedades.marte / gravedades.tierra;
	}
	if (planeta == "júpiter") {
		peso_final = mipeso * gravedades.jupiter / gravedades.tierra;
	}
	peso_final = parseInt(peso_final);

	texto.innerHTML = "Tu peso en marte es " + peso_final + " Kg";
}