// forma 1

// 1- crear un elemento en html y llamar al nombr ahora en javascript 
const imagen = document.getElementsByClassName("contenedor")[0];
console.log(imagen);

// 2 crear el elemento

const nuevaimg = document.createElement("img");

// 3 modificar atributos 

nuevaimg.src = "https://placeimg.com/200/200/nature";

nuevaimg.alt = "imagen de naturaleza";

// 4 insertar el elemento 

imagen.appendChild(nuevaimg);

// otra forma de crear elementos 

// llamar al elento padrel el que esta en html a javascript

const imagen2= document.getElementById("img");

console.log(imagen2);

imagen2.innerHTML = `
 <img src="https://placeimg.com/200/200/nature" /> alt="imagen"
`;


// crear una lista apartir de los Elementos guardados en un arreglo 

const nombre = ["Pedro","Juan","Sonia","Miguel"];


// forma 1 

const lista1 = document.getElementById("lista1");
nombre.forEach(el => {
    const li = document.createElement("li");
    li.textContent = el;
    lista1.appendChild(li);
});

// forma 2
const frutas = ["Manzana","Limon","Pera","Uva"];

const lista2 = document.getElementById("lista2");
frutas.forEach((el)) => {
    lista2.innerHTML +=`
        <li>${el}</li>
    `;};

    // lista 2 = lista2 + el;
    
