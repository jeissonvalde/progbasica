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

function darpeso(peso_final){

	texto = document.getElementById("text");
	mipeso = document.getElementById("peso").value;
	planeta = document.getElementById("pla").value;
	if (planeta == 1) {
		peso_final = mipeso * gravedades.marte / gravedades.tierra;
	}
	if (planeta == 2) {
		peso_final = mipeso * gravedades.jupiter / gravedades.tierra;
	}
	peso_final = parseInt(peso_final);

<<<<<<< HEAD
	texto.innerHTML = "Tu peso en marte es " + num + " Kg.";
=======
	texto.innerHTML = "Tu peso en marte es " + peso_final + " Kg";
	
>>>>>>> origin/gh-pages
}