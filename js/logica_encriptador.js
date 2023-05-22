//Funciones para obetner el valor del TextArea
function valor_encriptar(){  

    const texto_encriptar = document.querySelector("#area_encriptador").value.toLowerCase();
    const texto_encriptado = encriptar(texto_encriptar);
    const text_encriptado_string = texto_encriptado.join("");
    document.querySelector("#area_desencriptador").value = text_encriptado_string;  
}

function valor_desencriptar(){
    const texto_desencriptar = document.querySelector("#area_encriptador").value.toLowerCase();
    const texto_desencriptado_string = desencriptar(texto_desencriptar);
    document.querySelector("#area_desencriptador").value = texto_desencriptado_string;  
}

//FuncionEncriptardora de texto
function encriptar(texto){
    // letras a encriptar
    let letra_a = 'a';
    let letra_e = 'e';
    let letra_i = 'i';
    let letra_o = 'o';
    let letra_u = 'u';
    
     //variables auxiliar
    const string_aux = [];
    
    for(let f in texto){
        string_aux[f] = texto[f];
        if(string_aux[f] == letra_a ){
            string_aux[f] = 'ai';
        }else if(string_aux[f] == letra_e ){
            string_aux[f] = 'enter';
        }else if(string_aux[f] == letra_i){
            string_aux[f] = 'imes';   
        }else if(string_aux[f] == letra_o){ 
            string_aux[f] = 'ober';
        }else if(string_aux[f] == letra_u){
            string_aux[f] ='ufat';
        }       
    }
    
    return string_aux;
}

//Funcion para desencriptar el texto
function desencriptar(texto){
    let aux_vec_a  = texto.replace(/ai/img,"a") ;
    let aux_vec_e  = aux_vec_a.replace(/enter/img,"e") ;
    let aux_vec_i = aux_vec_e.replace(/imes/img,"i") ;
    let aux_vec_o = aux_vec_i.replace(/ober/img,"o") ;
    let aux_vec_u = aux_vec_o.replace(/ufat/img,"u") ;
    return aux_vec_u;
}

//Funcion para copiar texto
function copiar(){
    const texto_copiado = document.querySelector("#area_desencriptador");
    texto_copiado.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    // alert("texto copiado")  
}

//Formas de estudio

    // texto_encriptar.forEach(element=>
    // {
    //     console.log(`metodo de forEach:${element}`);
    // })

    // for(let key in texto_encriptar){
    //     console.log(`Metodo de for: ${texto_encriptar[key]}`);

    // /Funcion para encriptar texto
    // function encriptar(texto){
    //     // letras a encriptar
    //     let letra_a = 'a';
    //     let letra_e = 'e';
    //     let letra_i = 'i';
    //     let letra_o = 'o';
    //     let letra_u = 'u';
    
    //     //logica para encriptar con objeto
    //     for(let i in texto){
    //         if(texto[i] == letra_a ){
    //             texto[i] = 'ai';
    //             // console.log(`Posición Letras: ${i}`);
    //         }else if(texto[i] == letra_e){
    //             texto[i] = 'enter';
    //             // console.log(`Posición letras: ${i}`);
    //         }else if(texto[i] == letra_i){
    //             texto[i] == 'imes';   
    //             // console.log(`Posición Letras: ${i}`);
    //         }else if(texto[i] == letra_o){ 
    //             texto[i] = 'ober';
    //             // console.log(`Posición Letras: ${i}`);   
    //         }else if(texto[i] == letra_u){
    //             texto[i] ='ufat';
    //             // console.log(`Posición Letras: ${i}`);
    //         }   
    //     }
    //     return texto;
    // }

    //type:objeto 
    // var texto_encriptar = [...document.querySelector("#area_encriptador").value];

    //type:string

    // llamada a la funcion encriptar 
    // let valor_encriptado = encriptar(texto_encriptar);
    // console.log(`tipo dato 1: ${typeof(valor_encriptado)}`);

    // let valor_encriptado_string = JSON.stringify(valor_encriptado);


    // console.log(`tipo de dato 2: ${typeof(JSON.stringify(valor_encriptado_string))}`);
    // console.log(`${valor_encriptado_string.concat(...valor_encriptado_string)}`);

    // valor_encriptado.forEach(
    //     element => {console.log(`Mediante forEach: ${JSON.stringify(element)}`);}
    // )

    // console.log(texto_encriptar);
    // console.log(`Tamaño: ${texto_encriptar.length}`);
    // [...document.querySelector("#area_desencriptador").value] = texto_encriptar.map;

    // var texto_desencriptar = document.querySelector("#area_encriptador").value.toLowerCase();
    // var texto_desencriptado = desencriptar_aux(texto_desencriptar);
    // var texto_desencriptado_string = texto_desencriptado.join("");

    // console.log(`valor desencriptado: ${texto_desencriptado_string}`);
    // document.querySelector("#area_desencriptador").value = texto_desencriptado_string;
// }
    
