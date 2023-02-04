const textArea = document.querySelector(".AreaTexto");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".btncopiar");
copia.style.display = "none"


/*Creando funcion para desabilitar el botón Encriptar hasta que no se ingresen datos*/

function habilitarBtnEncriptar(){

    txt_1 = document.getElementById("txtArea").value;
    val = 0

    if(txt_1 == ""){
        val++;
    }

    if(val == 0){
        document.getElementById("btnEncriptartxt").disabled = false;
    }else {
        document.getElementById("btnEncriptartxt").disabled = true;
    }       
}

document.getElementById("txtArea").addEventListener("keyup", habilitarBtnEncriptar);

/* --------------------------------------------------------------------------------------- */


/*Creando funcion para desabilitar el botón Desencriptar hasta que no se ingresen datos*/

function habilitarBtnDesencriptar(){

    txt_1 = document.getElementById("txtArea").value;
    val = 0

    if(txt_1 == ""){
        val++;
    }

    if(val == 0){
        document.getElementById("btnDesencriptartxt").disabled = false;
    }else {
        document.getElementById("btnDesencriptartxt").disabled = true;
    }       
}

document.getElementById("txtArea").addEventListener("keyup", habilitarBtnDesencriptar);

/* --------------------------------------------------------------------------------------- */


/* Función para Encriptar el texto */

function btnEncriptar(){
    
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado        
        textArea.value = "";
        copia.style.display = ""
    
    
}

/* --------------------------------------------------------------------------------------- */

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function btncopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";    
}

