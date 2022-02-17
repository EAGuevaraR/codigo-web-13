/*una variable sólo puede contener un dato a la vez*/
/*Existe una variable con muchos datos?, si con arreglos*/
/**Un arreglo es un conjunto de datos, se declara de forma similar a como se declara una variable, pero debemos colocar [] después del igual*/
//esta vacío, para llenarlo hay que colocar los datos separados por comas//
//ojo siempre empezar a contar los índices desde el 0//
let alumnos =["Erick", "Karina", "Partricia", "Kjaris", "Bruno"];
console.log ("alumnos", alumnos);

//puede contener datos de varios tipos//

const variosTipos = (100, "juana", true, 100.5);

const productos = ("Table", "Laptop", "Tv", "radios");

//cómo acceder a un dato en específico//

console.log (alumnos[2]);
console.log(alumnos[4]);

//se puede alterar un dato del array?//
//voy a reasignar el valor del índice 0//
alumnos[0] = "Pepe";
console.log("alumno reasignado", alumnos);

//también se puede crear datos en un array ya creado antes//
//alumnos [4] es el último dato del array, pero puedo agregar uno más//
alumnos[5] = "Erick";
console.log("creando un nuevo elemento", alumnos);

alumnos[6] = "Joel";
console.log(alumnos);
//la consola llena con espacios vacíos//

// como puedo saber cuantos elementos contiene un array//
//los arrays tienen una funcion llamada lenght que nos permite saber cuantos elementos tiene un array//
console.log("cantidad de elementos", alumnos.length);

//quiero agregar un elementoe ne la última posición del array//
alumnos[alumnos.length] = "Juan";
console.log("Creando un nuevo elemento", alumnos);

// si quiero obtener el último elemento de mi array?//
//.lenght retorna un number//
console.log ("ultimo elemento", alumnos[alumnos.length-1]);


