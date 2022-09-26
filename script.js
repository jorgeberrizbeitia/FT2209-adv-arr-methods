console.log("probando")

// METODOS AVANZADOS DE ARRAY

// .forEach() => ejecuta una funcion por cada elemento del array. NO RETORNA NINGUN VALOR.
// acepta una funcion de callback

let randomNumbers = [4, 8, 15, 16, 23, 42];


function testFunction(patata1, patata2) {
  console.log("ejecutando funcion test")
  console.log(`el elemento es: ${patata1} y el indice es ${patata2}`)
}

randomNumbers.forEach( testFunction ) // se ejecuta por cada elemento del array


let returnOfforEach = randomNumbers.forEach( (eachNumber, index) => {
  // en el forEach no podemos usar las palabras break y continue
  // return detiene la ejecutacion de una iteracion
  console.log( `elemento: ${eachNumber}. Indice: ${index}` )
  if (eachNumber === 42) {
    console.log("la respuesta a la vida y todo lo que existe en el universo")
  }
} )

console.log(returnOfforEach) // siempre undefined


// .map() =>  crear un nuevo array con los elementos modificados. SIEMPRE DEBE RETORNAR UN VALOR.

// let randomNumbers = [4, 8, 15, 16, 23, 42];

randomNumbers.map( (eachNumber, index) => {
  console.log("ejecutando el map", eachNumber, index)
} )

let newArr = randomNumbers.map((eachNumber, index) => {
  // crear un nuevo array con todos los numeros del arr original, multiplicados por 100
  // retornar cada valor nuevo del array
  // return `Index. ${index}. ${eachNumber * 100}`
  return eachNumber * 100
})

console.log(newArr)


function changeNumbersToStrings(array) {

  // recibir un array de numeros y retornar el array pero de strings.
  let newArr = array.map((eachElement) => {
    // return `${eachElement}`
    return eachElement.toString()
  })

  console.log(newArr)
  return newArr

}

console.log( changeNumbersToStrings( randomNumbers ) )