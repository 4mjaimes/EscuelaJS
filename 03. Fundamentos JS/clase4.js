var manuel = {
  nombre: 'Manuel',
  apellido: 'Jaimes',
  edad: 27
}

var dario = {
  nombre: 'Dario',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreMayusculas(persona){
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

function imprimirNombreEdad(persona){
  var { nombre, edad} = persona;
  console.log(`Hola me llamo ${nombre} y tengo ${edad} años.`);
}

function cumpleanos(persona){
  return{
    ...persona,
    edad: persona.edad + 1
  }
}

// imprimirNombreMayusculas(manuel);
// imprimirNombreMayusculas(dario);
// imprimirNombreEdad(manuel);
// imprimirNombreEdad(dario);