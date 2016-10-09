var gravedades = {
	tierra: 9.8,
	marte: 3.7,
	jupiter: 24.8
};

var mipeso, planeta;
var peso_final;

function inicio() {

	mipeso = prompt("Escribe tu peso por favor.");
	planeta = prompt("Escribe el planeta que quieres conocer tu peso (en minúsculas ej: marte o júpiter)");
	peso_final = mipeso * gravedades.marte / gravedades.tierra;
	peso_final = parseInt(peso_final);

	document.write("Tu peso en marte es " + peso_final + " Kg");
}