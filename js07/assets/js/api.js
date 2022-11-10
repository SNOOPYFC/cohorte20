// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"), 500);
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();


const nombre = => {
    const nombres = ["Pepe","Pancho","Maria"];
    setTimeout(() =>{
        return nombres;

    }, 3000);
}
console.log(nombre());



const url = "https://pokeapi.co/api/v2/pokemon/{id"; 

const pokedex = () => {
    fetch(url)
    .then((datos) => datos.json())
    .then((pokemon) => {
        console.log(pokemon)

    })
};
pokedex();
console.log(url);


const nombre = () => {
    const nombres = ["Pepe", "Pancho", "María"];

    

    /* setTimeout(() => {
        return nombres;
    }, 0); */

    return new Promise((resolve, reject) => { //resolve -- proceso exitoso
        setTimeout(() => {
                                //reject -- proceso no exitoso
           if(true){
            resolve(nombres);
           }else{
            reject("No hay nombres");
           }
           
        }, 3000)
    });

}
or => console.warn(error));



const cartaPokemon = document.getElementById('pokemon');
const nombrePokemon = document.getElementById('nombre');
const imagen = document.getElementById('img');

const url = 'https://pokeapi.co/api/v2/pokemon/125';

const pokedex = async () => {
    try {

        const respuesta = await fetch(url);
        const pokemon = await respuesta.json();
        
        console.log(pokemon.name);

        const datos = {
            nombre: pokemon.name,
            imagen: pokemon.sprites.other['official-artwork'].front_default,
        }

        console.log(datos.imagen);

        nombrePokemon.textContent = datos.nombre;
        imagen.innerHTML = `
            <img src="${datos.imagen}" alt="imagen de ${datos.nombre}" width="250"/>
        `;
        
        
    } catch (error) {


        
    }
}

pokedex();

