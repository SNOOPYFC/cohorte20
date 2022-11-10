// switch - case
// switch evalua opciones individuales, no se le pone eso de mayor o menor
// evalua rango de valores y es mas optimo
// let dia = 1;

// switch (dia) {
//     case 1:
//         document.write("Lunes");
//         break;
//     case 1:
//         document.write("Lunes");
//         break;
//     case 2:
//         document.write("Lunes");
//         break;
//     case 3:
//         document.write("Lunes");
//         break;
//     case 4:
//         document.write("Lunes");
//         break;
//     case 5:
//         document.write("Lunes");
//         break;
//     case 6:
//         document.write("Lunes");
//         break;
//     case 7:
//         document.write("Lunes");
//         break;
//     default:
//         document.write("no es un numero falso");
//         break;    
// }

let cupon = prompt^("introduce tu cupon")
let necaxa = prompt^("introduce el precio")

switch (cupon , necaxa) {
    case Bronce , 100:
        document.write("Tienes un descuento de 5%");
        break;
    case Plata:
        document.write("Tienes un descuento de 10%");
        break;
    case Oro:
        document.write("Tienes un descuento de 20%");
        break;
    case Platino:
        document.write("Tienes un descuento de 25%");
        break;
    default:
        document.write("no es un numero falso");
        break;    
}

// if simplificado
// condicion en caso de ser verdad : en caso de ser falso 
let edad = 25
let mensaje = (edad >= 18)
    ? "es mayor de edad"
    : "Tas chiquito";
console.log(mensaje);
console.log(`Yo soy Raul y soy ${edad >}`);