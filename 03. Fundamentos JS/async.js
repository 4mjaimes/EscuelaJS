const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

var OPTS = {crossDomain: true}

function obtenerPersonaje(id, callback){
  const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $
    .get(URL, OPTS, callback).
    fail(() => {console.log(`No se pudo obtener el parametro ${id}`)})
}

obtenerPersonaje(1, function(persona){
  console.log(`Hola, soy ${persona.name}`)
  obtenerPersonaje(2, function(persona){
    console.log(`Hola, soy ${persona.name}`)
    obtenerPersonaje(3, function(persona){
      console.log(`Hola, soy ${persona.name}`)
    })
  })
})