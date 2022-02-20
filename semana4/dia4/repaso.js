// const mascotasEdadPar = mascotas.filter ((mascota) => mascota.edad%2 ===0);
// console.log("Mascotas con edad par", mascotasEdadPar);



const arregloCursos = [
  {
    nombre: "React JS",
    tec: "JS",
  },
  {
    nombre: "django",
    tec: "Python",
  },
  {
    nombre: "Angular",
    tec: "JS",
  },
  {
    nombre: "Flask",
    tec: "Python",
  },
  {
    nombre: "Laravel",
    tec: "PHP",
  },
];


const tecjs = arregloCursos.filter ((curso) => curso.tec === "JS");
console.log(tecjs);
const tecPython = arregloCursos.filter ((curso) => curso.tec === "Python");
console.log(tecPython);
const tecPHP = arregloCursos.filter ((curso) => curso.tec === "PHP");
console.log(tecPHP);

