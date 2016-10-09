var gravedades = {
	tierra: 9.8,
	marte: 3.7,
	jupiter: 24.8
};

var mipeso = 71;
var peso_final;

function inicio() {

	peso_final = mipeso * gravedades.marte / gravedades.tierra;
	peso_final = parseInt(peso_final);

	document.write(peso_final);
}