function validarTexto (texto) {
    
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
      
    if(texto.match(mayusculas)||texto.match(caracteres)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true; 
    }else if(texto==vacio){
       alert("Ingrese un mensaje para encriptar");
        return true;
   }else {
        return false;
    }
}
let BtnEncriptador = document.querySelector("#BtnEncriptador");
BtnEncriptador.addEventListener("click",function ()  {
    let textInput = document.querySelector("#CajaTxt1").value;
    let textoIngresado = textInput;
   
    if (validarTexto (textoIngresado) == false) {       
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector("#CajaTxt2");
        resultado.value = Encriptado;
    } else {        
        textInput = "";     
    }
            
})
let Desencriptar = document.querySelector("#desencriptar");
Desencriptar.addEventListener("click", function(){
    let textoIngresado = document.querySelector("#CajaTxt1").value;
    let Desencriptado = desencriptar(textoIngresado);
    let resultado = document.querySelector("#CajaTxt2");
    resultado.value = Desencriptado;
})
function desencriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(reglas[obj],obj);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}
const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};
function encriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(obj,reglas[obj]);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}
let Copiar = document.querySelector("#copia");
Copiar.addEventListener("click",function(){        
    let Copiado = document.querySelector("#CajaTxt2").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#CajaTxt2").value="";
    document.querySelector("#CajaTxt1").value="";

});


