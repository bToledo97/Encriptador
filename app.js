
//funcion para cambiar parametros de mis etiquetas html
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//Funcion para encriptar las vocales
function encriptarTexto() {
   
    let textoUsuario = document.querySelector('.textoUsuario').value;

  //validacion de campo usuario vacio
    if (textoUsuario === "") {
        asignarTextoElemento('.condiciones', '¡Debes ingresar un texto!');
        return; 
    }

    
    let textoEncriptado = textoUsuario
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    
    
    document.querySelector('.tituloh2').textContent = "Texto encriptado:";
    document.querySelector('.parrafo2').textContent = textoEncriptado;
    asignarTextoElemento('.imgMuñeco', 'hola');
}

//Reutilizamos la funcion anterior para desencriptar las vocales
function desencriptarTexto() {
    let textoUsuario = document.querySelector('.textoUsuario').value;

    if (textoUsuario === "") {
        asignarTextoElemento('.condiciones', '¡Debes ingresar un texto!');
        return;
    }

    let textoDesencriptado = textoUsuario
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.querySelector('.tituloh2').textContent = "Texto desencriptado:";
    document.querySelector('.parrafo2').textContent = textoDesencriptado;
}
