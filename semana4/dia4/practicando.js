// let contador=0;
// while (contador<10) {
//   console.log(contador*2);
//   contador++
// }

// const multiplosDiez = (numero) => {
//   let contador =1;
//   while (contador<10) {
//     console.log("multiplicando contador por 10", numero*contador);
//     contador++
//   }
// }
// multiplosDiez (10);

// const cantidadSaludos = (numero) => {
//   let contador =1;
//   while (contador<=10) {
//     console.log("Este es el saludo nro ", numero*contador)
//     contador++
//   }
// }
// cantidadSaludos(2)

// for (i=0; i<10;i++) {
//   console.log(i)
// }

// const arrayAlumnos = ["Ernesto", "Karla", "Isabel", "Lucía", "Rosa"];

// for (i=0; i<arrayAlumnos.length; i++) {
//   console.log("Los alumnos son ", arrayAlumnos[i]);
// }

// const alumnos = [
//     {
//       nombre: "Pepe",
//       edad: 21,
//     },
//     {
//       nombre: "Juan",
//       edad: 30,
//     },
//     {
//       nombre: "Lucho",
//       edad: 22,
//     },
//   ];

// const edadAlumnos = (edad) =>{
//   for(i=0; i<=alumnos.length; i++) {
//     if(alumnos[i].edad < 30){
//       console.log(alumnos[i]);
//   };  
// };
// }
// edadAlumnos()

// const laptops = [
//     {
//       marca: "Lenovo",
//       imagen: "https://logo.com",
//       nombre: "Ide Centre AIO I3",
//       vendedor: "Falabella",
//       precioOferta: 1599,
//       precioNormal: 3599,
//       calificacion: 2,
//     },
//     {
//       marca: "Acer",
//       imagen: "https://logo.com",
//       nombre: "AN515 15.6",
//       vendedor: "Falabella",
//       precioOferta: 3399,
//       precioNormal: 4999,
//       calificacion: 5,
//     },
//   ];


// const precios = (barato) =>{
//   for(i=0;i<=laptops.length;i++){
//     if(laptops[i].precioOferta<2000){
//     console.log(laptops[i]);
//   }
//  }
// }
// precios()


// Escribe un programa que pida una frase y escriba cuántas
// veces aparecen cada una de las vocales


const contarVocales = (frase) =>{
  const fraseMayus = frase.toUppercase ();
  const Split = fraseMayus.split ();
  console.log(split)  
}



contarVocales ("No quiero nada")