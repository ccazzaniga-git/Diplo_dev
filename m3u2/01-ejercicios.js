//console.log(`Ejercicios de JavaScript`);

// Ejercicio 1: Variables 

// var producto = "Laptop";
// var precio = 20000;
// var disponible = true;
// console.log( `El ${producto} cuesta ${precio} y su estado es ${disponible}` );




// Ejercicio 2: Estructura de control
// Quise resolverlo con arrays pero se extrendia demasiado pero lo dejo para no borrarlo     const.transporte = [pie, bici, colectivo, auto, avion]; let.distancia = {i [0] >=1000} , {i [1] <=1001 , >=10000 } , {i [2] <=10001 , >=30000 } , {i [3] <=30001 , >=100000 } , {i [4] <100000 }  investigue yme recomendo la ia que deberia asignarle los valores a cada transporte dentro del array

let distancia = 33332;
let transporte;

if (distancia <= 1000) { transporte = "a pie"; }
else if (distancia <= 10000) { transporte = "en bici"; }
else if (distancia <= 30000) { transporte = "en colectivo"; }
else if (distancia <= 100000) { transporte = "en auto"; }
else { transporte = "en avion"; }

console.log(`El transporte recomendado para recorrer ${distancia} metros es ${transporte}`);




// Ejercicio 3: Bucles

const producto = ["carne", "arroz", "queso", "tomate", "pera", "manzana", "leche", "pan", "huevo", "azucar"];
for (let i = 0; i < producto.length; i++) { console.log(i, `No te olvides de comprar ${producto[i]}`); }





// Ejercicio 4: Funciones (me costo horrores)

const numeros = [1, 2, 3, 4, 5, 8];

function Mayor(numeros) {
    let numeromasgrande = numeros[0];

    for (let i = 1; i < numeros.length; i++){
        if (numeros[i] > numeromasgrande) {
            numeromasgrande = numeros[i];
        }
    }
    return numeromasgrande;
}
console.log(Mayor(numeros));



// const num1 = 15;
// const num2 = 20;
// const num3 = 35;

// if (num1 > num2 && num1 > num3) {
//     console.log(`el mayor es el  ${num1}`);
// } else if (num2 > num3) {
//     console.log(`el mayor es el  ${num2}`);
// } else {
//     console.log(`el mayor es el  ${num3}`);
// }



// const numeros = [1, 34, 45, 67, 78];
// let suma = 0

// for (let i = 0; i < numeros.length; i++) {
//     suma += numeros[i]
// }

// console.log(suma)