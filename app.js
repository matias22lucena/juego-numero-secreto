
let numeroSecreto = 0; //los valores de estas variables se van corregir en la funcion condiciones iniciales 
let numeroDeIntentos  = 0; //los valores de estas variables se van corregir en la funcion condiciones iniciales 
let listaNumerosSorteados= [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto){ // esto son los parametros

    let elementoHTML = document.querySelector(elemento);// esto es lo que vamos a cambiar 

    elementoHTML.innerHTML = texto;// y esto es el texto que asignaremos cuando llamemos a la variable
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //este parseint lo que hace es 
    //convertir el valor que capturA este document a number

    console.log(numeroDeIntentos);

    if (numeroDeUsuario===numeroSecreto){ // aqui verificamos si el numero secreto es igual al numero del usuario 
        asignarTextoElemento('p', `Acertaste el numero en ${numeroDeIntentos} ${numeroDeIntentos === 1 ? 'vez':'veces'   }`)// aqui lo que hacemos es utilizar la funcion asignartextoelemento
        //esta funcion ya habiamos definido arriba.

        document.getElementById('reiniciar').removeAttribute('disabled') // aqui removemos el atributo desde js 

    }else{ // EL USUARIO NO ACERTO en este else if lo que hacemos es hacer preguntar si el numero que ingreso el usuario es mayor al num secreto
        // si esta condicion es verdadera le dara un mensaje que el numero es menor, sino pasara al else.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor')
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
        numeroDeIntentos ++; // aqui le vamos sumando los intentos 
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){ 
    let valorCaja = document.querySelector('#valorUsuario');//document.querySelector ('#') este # le estamos diciendo que lo queremos por id
    valorCaja.value=""; // aqui dejamos el input vacio
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados); 
    //Aqui generamos los numeros secretos y lo guardamos en una variable 
    //si ya se sortearon todos los numeros se ejecutara este codigo
    if(listaNumerosSorteados.length==numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon tods los numeros posible')
    }else{

    //si el numero generado esta incluido en la lista 
    if(listaNumerosSorteados.includes(numeroGenerado)){// lo que hace este if es rrecorrer todo el array y buscar 
        // si ya hay un valor registrado el que nosotros vamos a pasar como parametro. 
        return generarNumeroSecreto(); // esto es para que si vuelve a tocar un numero repetido vuelva a generar otro
        }else{
        listaNumerosSorteados.push(numeroGenerado); // este guarda el nummero generado en el array para que no vuelva a salir el mismo numero 

        return numeroGenerado;
     }
    }
}  

function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del numero secretoo!!');
    // aqui lo primero es el elemento, lo segundo el texto
asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`) 
numeroSecreto = generarNumeroSecreto(); //aqui no lo definimos nuevamente. lo que hacemos es volver a invocarlo en esta funcion.
console.log(numeroSecreto);
numeroDeIntentos=1;
}

function reiniciarJuego(){
    //Limpiar caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorios
    //inicializar el numero de intentos 
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); // lo que hace este set atribute es colocar esto con tal valor
    // le estamos diciendo que desactive el boton de reiniciar el juego. una vez que nosotros adivinamos el numero el boton se activa.

}

condicionesIniciales();