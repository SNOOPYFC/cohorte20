var miNom = "Maximino Montiel";
console.log(miNom);

function miFuncion() {
    let nombre = "Max";
    console.log(nombre);   
}
miFuncion();

function funcion1() {
    let valor = 2;
    valor = valor + 3;
    return valor;
}
let resultado = funcion1();
console.log("el resultado es: "+ resultado);

function ejemplo() {
    let valor1 = 2;
    valor1 = valor1 + 3;
    console.log("El resultado de valor1 :" + valor1)
}
ejemplo();

let variableGlobal = 5;
function funcion3() {
    let variablelocal= "El valor es. ";
    console.log(variablelocal + variableGlobal);    
}
funcion3();

function funcion4(valor) {
    let numero = 6;
    numero = numero * valor;
    return numero;
}

let salida = funcion4(2)
console.log("El producato es " + salida);

// funciones anonimas, no se le declaran sin nobre o identificador, ventaja es que se pueden asignar a varuables
let  miFuncion0 = function(parametro) {
    parametro = parametro * 2;
    return parametro;
};
console.log("llamando la funcion anonima" + miFuncion0(4));

let funcion01 = function (caracteres) {
    return "Hola " + caracteres ;
}( "lunes");
console.log("El resultado es: " + funcion01);

// funcion tipo flecha, se ve como la forma flecha 
let suma = (x,y) => { return x + y};
let resultado1 = suma (5,3);
console.log("La suma es: " + resultado1);



function calcularPrecioTotal(precio) {
    let impuestos = 1.16;
    let gastoEnvio = 10;
    precioTotal = (precio * impuestos) + gastoEnvio;
    return precioTotal;
    
}
precioTotal = calcularPrecioTotal(23.34);
console.log("El precio total es: " + precioTotal); 

let calcularPrecioTotal1 = function(precio) {
    let impuestos = 1.16;
    let gastoEnvio = 10;
    precioTotal = (precio * impuestos) + gastoEnvio;
    return precioTotal;
    
}
console.log("El precio total es: " + calcularPrecioTotal1(23.34)); 

let calcularPrecioTotal2= (impuestos,precio,gastoEnvio ) => { return (impuestos * precio) + gastoEnvio};
let calcularPrecioTotal3 = calcularPrecioTotal2 (1.16, 23.34,10)
console.log("El precio total es: " + calcularPrecioTotal3);

// otro ejemplo 

function precioConImpuestos(precio,porcentajeImpuestos ) {
    let precioConImpuestos44 = (1 + porcentajeImpuestos/100) * precio;
    return precioConImpuestos44;
}
precioConImpuestos44 = precioConImpuestos(23.34 , 16)
console.log("El precio total es: " + precioConImpuestos44);

// anonima

let precioConImpuestos1 = function(precio,porcentajeImpuestos ) {
    let precioConImpuestos = (1 + porcentajeImpuestos/100) * precio;
    return precioConImpuestos;
    
}
console.log("El precio total es: " + precioConImpuestos1(23.34,16)); 

// flecha 
let precioConImpuestos3= (precio,porcentajeImpuestos ) => { return (1 + porcentajeImpuestos/100) * precio};
let precioConImpuestos4 = precioConImpuestos3 (23.34,16);
console.log("El precio total es: " + precioConImpuestos4);



