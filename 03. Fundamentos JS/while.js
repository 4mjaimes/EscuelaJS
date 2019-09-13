var manuel = {
  nombre: 'Manuel',
  apellido: 'Jaimes',
  edad: 27,
  peso: 75
}

const INCREMENTO_PESO = 0.3;
const DIAS_ANO = 365;

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = manuel.peso - 3;
var dias = 0;

while(manuel.peso > META){
  if(comeMucho()){
    aumentarPeso(manuel)
  }
  if(realizaDeporte()){
    adelgazar(manuel)
  }
  dias++;
}

console.log(`Pasaron ${dias} días hasta que ${manuel.nombre} adelgazo 3kg`);
