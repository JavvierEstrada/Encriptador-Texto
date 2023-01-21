// Para este encriptador, usé una serie de numeros y letras al azar para poder encriptar de mejor manera los mensajes
//La letra a: rzy
//La letra e: 39t
//La letra i: 1z66
//La letra o: 1zm
//La letra u: m2yw

function encriptar() {
	var texto = document.querySelector(".mensaje_encriptado").value;
	var textoCifrado = texto
		.replace(/a/gi, "rzy")
		.replace(/e/gi, "39t")
		.replace(/i/gi, "1z66")
		.replace(/o/gi, "lzm")
		.replace(/u/gi, "m2yw");

	document.querySelector(".mensaje_desencriptado").value = textoCifrado;
}

const boton1 = document.querySelector(".btn_enctiptar");
boton1.onclick = encriptar;

//

function desencriptar() {
	var texto = document.querySelector(".mensaje_encriptado").value;
	var textoCifrado = texto
		.replace(/rzy/gi, "a")
		.replace(/39t/gi, "e")
		.replace(/1z66/gi, "i")
		.replace(/lzm/gi, "o")
		.replace(/m2yw/gi, "u");
	document.querySelector(".mensaje_desencriptado").value = textoCifrado;
}

const boton2 = document.querySelector(".btn_desencriptar");
boton2.onclick = desencriptar;

//Funcion copiar

function copiar() {

let texto = document.getElementById('mensaje_desencriptado');
texto.select();
texto.setSelectionRange(0, 99999);
document.execCommand ('copy'); 
}