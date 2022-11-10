let miVariable = prompt ("Cual es tu nombre: ");
function saludos() {
    alert(miVariable);
}
saludos(miVariable)

function suma (){
    let valor1 = 10;
    let valor2 = 5;
    return valor1 + valor2 ;
}
console.log ("El resultado de la suma es: "+ suma());

function resta ( ){
    let valor1 = 10;
    let valor2 = 5;
    return valor1 - valor2; 
}
console.log ("El resultado de la resta es: " + resta() );

function multiplicacion ( ){
    let valor1 = 10;
    let valor2 = 5;
    return valor1 * valor2; 
}
console.log ("El resultado de la multiplicacion es: " + multiplicacion() );

function division ( ){
    let valor1 = 10;
    let valor2 = 5;
    return valor1 / valor2; 
}
console.log ("El resultado de la division es: " + division() );

function residuo ( ){
    let valor1 = 7;
    let valor2 = 2;
    return valor1 % valor2; 
}
console.log ("El resultado del residuo es: " + residuo() );

//ADICIONALES OPERADORES//

function adicionales ( ){
    let valor1 = 7;
    return valor1 +1 ; 
}
console.log ("El incremento en uno es: " + adicionales() );

//otra forma de hacer lo de arriba//


function adicionales1 ( ){
    let valor1 = 7;
    return ++valor1  ; 
}
console.log ("El incremento en uno es: " + adicionales1() );
//falto los incremesntos y decrementos//

// de control//

function adicionales2 ( ){
    let valor1 = 7;
    let valor2 = 0;
    if (valor2 != 0) {
    return valor1 / valor2; 
    }
    
}
console.log("el denominador es " + adicionales2() );


//operadores buleanos//
function logico() {
    let valido = 5;
    let validos2 = 3;
    if (valido >= validos2){
        console.log("El mayor es : " + validos2 );
    }
    //console.log("El valor booleano es: " + valido)
    
}
logico();

function adicionales2 ( ){
    let valo11 = 7;
    let valor2 = 1;
    if (valor2 != 0) {
    console.log("el denominador es " , valo11 / valor2 );
    }
   
}

function edad () {
    let miEdad = 10;
    if (miEdad >= 18) {
        console.log("Soy mayor de edad");
    }
        else {
            console.log("Soy menor de edad");

        }
    
}
edad()


//
function conjunciones(){ 
    let valor1=true; 
    let valor2=false; 
    if(valor1 && valor2){ 
        console.log("el valor 1 y el valor 2 son verdaderos"); 
    } 
    else{ 
        console.log("Un valor es falso"); 
    } 
 
} 
conjunciones() 

function disyuncion(){ 
    valor1=true; 
    valor2=false; 
    if(valor1|| valor2){ 
 
        console.log("El operador or es verdadero"); 
    } 
    else{ 
        console.log("El operador or es falso "); 
    } 
 
} 
disyuncion() 
 
function negacion(){ 
    valor1=false; 
    if(!(!valor1 )){ 
        console.log("El valor es "+valor1); 
 
    } 
    else{ 
        console.log("El valor negado  es "+valor1); 
    } 
} 
negacion()
 