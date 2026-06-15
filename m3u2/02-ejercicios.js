const textarea = document.getElementById("textarea");
const contar = document.getElementById("contar");

textarea.addEventListener ('keyup', function() {
     contar.innerText = textarea.value.length;
})
//PROFE NO TERMINE EL EJERCICIO 2 DE CONTAR LOS ESPACIOS DE "Programar un contador de caracteres para un textarea." ESTOY AVANZANDO DE A POCO, NO SE ME ILUMINO EL CEREBRO TODAVIA PARA PENSAR LA SOLUCION PERO LO VOY A IR  HACIENDO 


// function calcularpromedio (parcial1, parcial2) {
//      const promedio = (parcial1 + parcial2) / 2
//      return promedio;
// }

// const parcial1Historia = 4;
// const parcial2Historia = 6;
// const promedioHistoria = calcularpromedio(parcial1Historia, parcial2Historia);


// // console.log (promedioHistoria)
// console.log (`La nota promedio de Historia es ${promedioHistoria}`)