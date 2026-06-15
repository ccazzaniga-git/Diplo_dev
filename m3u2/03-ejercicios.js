
//ejercicio 2

const producto = {
    id: 123,  
    nombre: "Auriculares inalámbricos",  
    precio: 120000,  
    stock: 25,  
    categoria: "Electrónica"  
}; 

// a) Usando la desestructuración de objetos, crea una variable para cada una de las 
// siguientes propiedades: nombre, precio y stock. 

const { nombre, precio, stock } = producto;

// console.log (`Los ${nombre} cuestan ${precio} y hay unos ${stock} en stock`);
console.log (nombre, precio, stock);
// b) Muestra en la consola el nombre del producto, su precio y la cantidad de stock 
// disponible, utilizando las variables que acabas de crear. 





//ejercicio 1


// const alumnos = [ 
// { 
// nombre: 'Juan Gomez', 
// nota: 7 
// }, { 
// nombre: 'Pedro Rodriguez', 
// nota: 4 
// }, { 
// nombre: 'Roxana García', 
// nota: 8 
// }, { 
// nombre: 'Luciano Lopez', 
// nota: 5 
// }, { 
// nombre: 'Fernanda Gimenez', 
// nota: 6 
// }, { 
// nombre: 'Florencia Martinez', 
// nota: 10 
// }, { 
// nombre: 'Raul Sanchez', 
// nota: 7 
// }, { 
// nombre: 'Sandra Figueroa', 
// nota: 8 
// } 
// ]; 

// const aprobados = alumnos.filter (alumno => alumno.nota >= 7)

// console.log (aprobados)
