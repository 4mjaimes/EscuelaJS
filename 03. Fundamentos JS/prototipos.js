// function Persona(nombre, apellido, altura){
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.altura = altura
// }

// function Desarrollador(nombre, apellido){
//   this.nombre = nombre;
//   this.apellido = apellido;
// }

class Persona{
  constructor(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura
  }

  saludar(fn){
    var {nombre, apellido} = this;
    console.log(`Hola me llamo ${nombre} ${apellido}`);
    if(fn){
      fn(nombre, apellido, false)
    }
  }

  soyAlto(){
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona{
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
  }

  saludar(fn){
    var {nombre, apellido} = this;
    console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador`)
    if(fn){
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen día ${nombre} ${apellido}`)
  if(esDev){
    console.log(`No sabia que eras desarrollador`)
  }
}

// Persona.prototype.saludar = function(){
//   console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
// }

// Persona.prototype.soyAlto = function(){
//   return this.altura > 1.8
// }


// Desarrollador.prototype.saludar = function(){
//   console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
// }


var manuel = new Desarrollador('Manuel', 'Jaimes', 1.75)
var carlos = new Persona('Carlos', 'Jaimes', 1.85)
var fernando = new Persona('Fernando', 'Jaimes', 1.73)
var evangelina = new Persona('Evangelina', 'Mejia', 1.65)

manuel.saludar(responderSaludo);
carlos.saludar(responderSaludo);
fernando.saludar(responderSaludo);
evangelina.saludar(responderSaludo);

