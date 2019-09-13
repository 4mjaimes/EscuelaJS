var nombre = 'Manuel', edad = 27;

function imprimirEdad(nombre_, edad_){
  console.log(`${nombre_} tiene ${edad_} años`);
}

function imprimirNombreMayusculas(nombre_){
  nombre_ = nombre_.toUpperCase();
  console.log(nombre_);
}

imprimirNombreMayusculas(nombre);