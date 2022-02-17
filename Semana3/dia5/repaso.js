const validarPar = (numero) => {
  return (+numero %2 === 0) ? "Es par" : "Es impar"   
}

console.log (validarPar(5))