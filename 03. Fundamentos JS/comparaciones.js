var x = 4, y = '4';

var manuel = {
  nombre: 'Manuel',
  apellido: 'Jaimes',
  edad: 27,
  peso: 75
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
}

const MAYORIA_EDAD = 18;

// function esMayorEdad(persona){
//   return persona.edad >= MAYORIA_EDAD
// }

const esMayorEdad = ({ edad }) => edad >= MAYORIA_EDAD
const esMenorEdad = persona => !esMayorEdad(persona)

function imprimirMayorEdad(persona){
  if(esMayorEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`);
  }
  else{
    console.log(`${persona.nombre} es menor de edad`)
  }
}

// function permitirAcceso(persona){
//   if(!esMayorEdad(persona)){
//     console.log('ACCESO DENEGADO')
//   }else{
//     console.log('ACCESO CONCEDIDO')
//   }
// }