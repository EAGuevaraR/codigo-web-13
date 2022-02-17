//una funcion es un conjunto de soluciones para poder realizar tareas//

function nombredelaFuncion(){
  //una vez declarada mi funcion todo el código que haga dentro de esta sólo se va a ejecutar cuando llame a la funcion//
  console.log("Mi primera funcion");
}
//para llamar a la funcion escribo su nombre junto a parantesis//
//una vez que la llame 
nombredelaFuncion();

//Una función es creada para poder reutilizar codigo//
//una de las misiones de una funciones es hacer un trabajo que se repite y se repite//
//al estar ese trabajo en una funcion solo necesito escribir el codigo una vez y luego llamar la funcion cuando se necesite//
//una funcion puede recibir parametros, que son variables que se le pasan a una funcion, y estos parametros van dentro de los parentesis de la funcion//

//function sumar(numero1, numero2){
  //numero1 y numero2 son parametros de la funcion sumar//
  //con los parametros puedo hacer lo que quiera//
  //const suma = +numero1 + +numero2;
  //console.log(suma);


//cuando se invoca la funcion hay que darle el valor de las variables//
//el orden en que se pasa es el orden en que los recibe//

console.log(sumar(50,20));
console.log(sumar(40,20));
console.log(sumar(10.5,20));
console.log(sumar(1,20));
console.log(sumar(50,600000));
console.log(sumar(50,2));
console.log(sumar("hola", 2))

// function sumar (numero1, numero2){
//   //first convertir parametros a numeros//
//   const convertNumero1 = +numero1
//   const convertNumero2 = +numero2
  
//   const suma = convertNumero1 + convertNumero2;
// //si auma es nana debo imprimir un mensaje de error//
// //isNaN(parametro) me permite saber su un numero es Nan//
// if (isNaN(suma)) {
//   console.log("Error: no se puede sumar");
// //return es una palabra reservada que nos permite regresar un valor e indica el final de la funcion//
//   return;
// }
//   console.log("suma:", suma);
// }
//se puede llarmar una funcion dentro de otra?, sí, se puede//

// function sumar (numero1, numero2){
//   const suma = +numero1 + +numero2;
//   if (isNaN(suma)){
//     return "Error no se puede sumar";
//   }
//   return suma;
// }

//operador ternario//
//es un if y un else pero en una sola linea//

// la estructura es la siguiente//

function sumar (numero1, numero2) {
  const suma = +numero1 + +numero2;
  return isNaN(suma) ? "Error no se puede sumar" : suma;
}

//funcion de expresión: es tener una funcion dentro de una variable//
//es conocido como funcion anónima//
//ejemplo1//
const resta = function(numero1, numero2){
  const calcresta = +numero1 - +numero2;
  return isNaN(calcresta) ? "Error no se puede restar" : calcresta;
}

console.log("Resta:", resta (10,20));

//ejemplo2//
const multiplicacion = function (numero1, numero2){
  const calcmultiplicacion = +numero1 * +numero2;
  return isNaN(calcmultiplicacion) ? "Error no se puede multiplicar" : calcmultiplicacion;
}

//Arrow function o funcion flecha//
//es una funcion parecidad a la funcion anonima o de expresión, sin embargo no hace falta usar la plaabra function para declarar esta//
//otro pto importante es que una funcion flecha no puede usar "this", que es una forma de llamar valores//
//Esta es la diferencia estre una function y un arrow function
//ejemplo, como declaramos un arrow function//
const division = (numero1, numero2) => {
  if (+numero2===0){
    return "Error no se puede dividir por 0"
  }
  const calcdivision = +numero1 / +numero2;
  return isNaN(calcdivision) ? "Error no se puede dividir" : calcdivision;
}
console.log(division(10,"0"));
console.log("Division:", division(10,2));

//cuando nuestro arrow function solo recibe un parametro//
const saludar = (nombre, apellido) => {
  return `Hola mi nombre es ${nombre} y mi apellido es ${apellido}`;
}
console.log (saludar("juan", "perez"));

// si la funcion arrow no recibe parametros se puede poner _ //
const funcionSinParametros = _ =>{
  return "Hola Mundo";
}

//Vamos a ver un arrow function inline//
//funciona cuando quiero ejecutar solo una linea de codigo//
const hello = () => "Hola Mundo inline";


