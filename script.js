console.log("probando");

// * METODOS AVANZADOS DE ARRAY

// * .forEach() => ejecuta una funcion por cada elemento del array. NO RETORNA NINGUN VALOR.
// acepta una funcion de callback

let randomNumbers = [4, 8, 15, 16, 23, 42];

function testFunction(patata1, patata2) {
  console.log("ejecutando funcion test");
  console.log(`el elemento es: ${patata1} y el indice es ${patata2}`);
}

randomNumbers.forEach(testFunction); // se ejecuta por cada elemento del array

let returnOfforEach = randomNumbers.forEach((eachNumber, index) => {
  // en el forEach no podemos usar las palabras break y continue
  // return detiene la ejecutacion de una iteracion
  console.log(`elemento: ${eachNumber}. Indice: ${index}`);
  if (eachNumber === 42) {
    console.log("la respuesta a la vida y todo lo que existe en el universo");
  }
});

console.log(returnOfforEach); // siempre undefined

// ACTIVITY forEach

let students = [
  { name: "Rafa", color: "Blue", candy: 12 },
  { name: "Elise", color: "Pink", candy: 21 },
  { name: "Bodei", color: "Yellow", candy: 31 },
  { name: "Nick", color: "Red", candy: 11 },
];

students.forEach((eachStudent) => {
  // let eachStudent = {name: 'Rafa', color: 'Blue', candy: 12}
  // console.log(eachStudent.name)
  if (eachStudent.candy > 20) {
    console.log(eachStudent.color);
  }
});







// * .map() =>  crear un nuevo array con los elementos modificados. SIEMPRE DEBE RETORNAR UN VALOR.
// map SIEMPRE retorna un array con la misma cantidad de elementos que el arr original

// let randomNumbers = [4, 8, 15, 16, 23, 42];

randomNumbers.map((eachNumber, index) => {
  console.log("ejecutando el map", eachNumber, index);
});

let newArr = randomNumbers.map((eachNumber, index) => {
  // crear un nuevo array con todos los numeros del arr original, multiplicados por 100
  // retornar cada valor nuevo del array
  // return `Index. ${index}. ${eachNumber * 100}`
  return eachNumber * 100;
});

console.log(newArr);

function changeNumbersToStrings(array) {
  // recibir un array de numeros y retornar el array pero de strings.
  let newArr = array.map((eachElement) => {
    // return `${eachElement}`
    return eachElement.toString();
  });

  console.log(newArr);
  return newArr;
}

console.log(changeNumbersToStrings(randomNumbers));


// Actividad MAP


const fruits = ['pineapple', 'orange', 'mango'];

const upperCaseFruits = fruits.map((eachElement) => {
  //your code here
  console.log(eachElement)
  return eachElement.toUpperCase()
})

// test
console.log(upperCaseFruits)  
//Answer should be  ['PINEAPPLE', 'ORANGE', 'MANGO'];


// exercise 2: use .map() to create a new array with each city capitalized (only first letter) 
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam']


let capitalizedCities = cities.map((eachCity) => {

  // return eachCity[0].toUpperCase() + eachCity.slice(1)

  let firstLetter = eachCity[0].toUpperCase() 
  // let firstLetter = eachCity.slice(0,1).toUpperCase() 
  let restOfWord = eachCity.slice(1)
  return firstLetter + restOfWord
})

// Answer should be :
// [ 'Miami', 'Barcelona', 'Madrid', 'Amsterdam']
console.log(capitalizedCities)


// exercise  3: Return only the names of the restaurants 
// Note: Be careful here. 'info' is an object with a key called 'list' which is the array
 
const info = {
  list: [
    {name: 'Mirazur', owner : 'Gustavo'},
    {name: 'Noma', owner : 'Taka'},
    {name: 'Gaggan', owner : 'Alvaro'},
    {name: 'Geranium', owner : 'Gustavo'},
    {name: 'Arpège', owner : 'Luis'},    
 ]  
}


function onlyNames(arr) {
  console.log(arr)
 //your code here
 let restaurantNames = arr.map((eachRest) => {
    return eachRest.name
 })

 return restaurantNames

}

// test
const restaurants = onlyNames( info.list )
console.log(restaurants)
// Answer should be [ 'Mirazur', 'Noma', 'Gaggan', 'Geranium', 'Arpège']


// .filter() => nos permite filtrar elementos de un array que pasen una condicion. CREAR UN NUEVO ARRAY.
// ejemplo. tengo 10 coches. y filtro por color. puedo tener un nuevo array solo con 5 coches.

let cars = [
  {brand: "Mercedez", year: 2012, color: "blue"},
  {brand: "Porsche", year: 2000, color: "gray"},
  {brand: "Seat", year: 2020, color: "black"},
  {brand: "Volvo", year: 2021, color: "blue"}
]

let filteredCars = cars.filter((eachCar) => {
  // no espera que retornemos un element
  // retornemos true (haya que agregarlo) o false (no haya que agregarlo)
  if (eachCar.year > 2010 && eachCar.color === "blue") {
    return true // agregalo al array
  } else {
    return false // ignoralo o no lo agregues al array
  }

  // opcional como sintaxis reducida
  // return eachCar.year > 2010 && eachCar.color === "blue" // o true o false

})

console.log(filteredCars)