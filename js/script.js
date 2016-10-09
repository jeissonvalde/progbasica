var gravedades = {
	tierra: 9.8,
	marte: 3.7,
	jupiter: 24.8
};

var mipeso, planeta;
var peso_final;

function inicio() {

	mipeso = document.getElementById("peso");
	planeta = document.getElementById("pla");
	if (planeta == "marte") {
		peso_final = mipeso * gravedades.marte / gravedades.tierra;
	}
	if (planeta == "júpiter") {
		peso_final = mipeso * gravedades.jupiter / gravedades.tierra;
	}
	peso_final = parseInt(peso_final);

	addEventListener("click", darpeso);
	
}

function darpeso (){
	document.write("Tu peso en marte es " + peso_final + " Kg");
}