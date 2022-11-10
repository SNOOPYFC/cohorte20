let x = 10;
console.log(x);

let persona  = {
        nombre: "juan",
        apellido: "perez"
        nombreCompleto: function() {
            return "el nombre es" + this.nombre + "" + this.apellido;
}
console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto);

let persona1 = new Object ();
persona1.edad = 23;
console.log(persona1);
console.log(persona1.edad);


class Persona {

    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    set apellido (apellido){
        this._apellido = apellido;
    }
    nombreCompleto () {
        return this._nombre + ' ' +this._apellido;
    }     
}

class Empleado extends Persona{
    constructor(nombre,apellido,empresa){
        
        super(nombre,apellido);
        this._empresa = empresa;
    }
    set empresa (empresa){
        this._empresa = empresa;
    }
    get empresa (){
        return this._empresa;
    }    
}

let p1 = new Persona('Hugo', 'Sanchez');
console.log(p1.nombreCompleto());

let E1 = new Empleado('Juan', 'Perez', 'coopel');

console.log(E1.nombreCompleto() + ' ' + E1._empresa);
