var manuel = {
  nombre: 'Manuel',
  apellido: 'Jaimes',
  altura: 1.75,
  libros: 10
}

var fernando = {
  nombre: 'Fernando',
  apellido: 'Jaimes',
  altura: 1.73,
  libros: 16
}

var carlos = {
  nombre: 'Carlos',
  apellido: 'Jaimes',
  altura: 1.85,
  libros: 98
}

var evangelina = {
  nombre: 'Evangelina',
  apellido: 'Mejia',
  altura: 1.65,
  libros: 65
}

var mario = {
  nombre: 'Mario',
  apellido: 'Jaimes',
  altura: 1.80,
  libros: 34
}

var personas = [manuel, fernando, carlos, evangelina, mario];

// const esAlta = ({altura}) => altura > 1.80
// const esBaja = ({altura}) => altura <= 1.80

// var personasAltas = personas.filter(esAlta)
// var personasBajas = personas.filter(esBaja)

// console.log(personasAltas);
// console.log(personasBajas);

// const alturaCms = persona => ({
//   ...persona,
//   altura: persona.altura * 100
// })

// var personasCms = personas.map(alturaCms);
// console.log(personasCms);
const totalLibros = (total, {libros}) => total + libros
var cantidadLibros = personas.reduce(totalLibros, 0);
console.log(`En total hay ${cantidadLibros} de libros`);

// for(var i = 0; i < personas.length; i++){
//   var persona = personas[i];
//   console.log(`${persona.nombre} mide ${persona.altura}mts`);
// }


