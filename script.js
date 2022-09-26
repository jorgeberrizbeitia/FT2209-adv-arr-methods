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

const fruits = ["pineapple", "orange", "mango"];

const upperCaseFruits = fruits.map((eachElement) => {
  //your code here
  console.log(eachElement);
  return eachElement.toUpperCase();
});

// test
console.log(upperCaseFruits);
//Answer should be  ['PINEAPPLE', 'ORANGE', 'MANGO'];

// exercise 2: use .map() to create a new array with each city capitalized (only first letter)
const cities = ["miami", "barcelona", "madrid", "amsterdam"];

let capitalizedCities = cities.map((eachCity) => {
  // return eachCity[0].toUpperCase() + eachCity.slice(1)

  let firstLetter = eachCity[0].toUpperCase();
  // let firstLetter = eachCity.slice(0,1).toUpperCase()
  let restOfWord = eachCity.slice(1);
  return firstLetter + restOfWord;
});

// Answer should be :
// [ 'Miami', 'Barcelona', 'Madrid', 'Amsterdam']
console.log(capitalizedCities);

// exercise  3: Return only the names of the restaurants
// Note: Be careful here. 'info' is an object with a key called 'list' which is the array

const info = {
  list: [
    { name: "Mirazur", owner: "Gustavo" },
    { name: "Noma", owner: "Taka" },
    { name: "Gaggan", owner: "Alvaro" },
    { name: "Geranium", owner: "Gustavo" },
    { name: "Arpège", owner: "Luis" },
  ],
};

function onlyNames(arr) {
  console.log(arr);
  //your code here
  let restaurantNames = arr.map((eachRest) => {
    return eachRest.name;
  });

  return restaurantNames;
}

// test
const restaurants = onlyNames(info.list);
console.log(restaurants);
// Answer should be [ 'Mirazur', 'Noma', 'Gaggan', 'Geranium', 'Arpège']

// .filter() => nos permite filtrar elementos de un array que pasen una condicion. CREAR UN NUEVO ARRAY.
// ejemplo. tengo 10 coches. y filtro por color. puedo tener un nuevo array solo con 5 coches.

let cars = [
  { brand: "Mercedez", year: 2012, color: "blue" },
  { brand: "Porsche", year: 2000, color: "gray" },
  { brand: "Seat", year: 2020, color: "black" },
  { brand: "Volvo", year: 2021, color: "blue" },
];

let filteredCars = cars.filter((eachCar) => {
  // no espera que retornemos un element
  // retornemos true (haya que agregarlo) o false (no haya que agregarlo)
  if (eachCar.year > 2010 && eachCar.color === "blue") {
    return true; // agregalo al array
  } else {
    return false; // ignoralo o no lo agregues al array
  }

  // opcional como sintaxis reducida
  // return eachCar.year > 2010 && eachCar.color === "blue" // o true o false
});

console.log(filteredCars);

// ACTIVITY filter

// Exercise 2: From the given array of people, get the people who are allowed to consume alcoholic beverages (i.e age >= 21).
const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 21 },
  { name: "Nettie", age: 20 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];

// note that "adults" is still just a function (just a function of arrow type)
const adults = (arr) => {
  //your code here
  //  console.log(arr)
  let filteredPeople = arr.filter((eachPerson) => {
    if (eachPerson.age >= 21) {
      return true;
    } else {
      return false;
    }
  });

  //  return filteredPeople 

  // * BONUS. solo los nombres *
  let onlyNames = filteredPeople.map((eachPerson) => {
    return eachPerson.name;
  });

  return onlyNames;
};

let canDrink = adults(people);
console.log(canDrink);
//Answer should be
/*
[
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 21 },
]
*/


// .reduce() ejecuta sobre cada elemento una funcion reductora, y retorna un valor con la reduccion final


let someNums = [1, 5, 10, 22];

// sintaxis
// let totalReduce = array.reduce( callbackToReduce, initialValueAccumulator )

let totalReduce = someNums.reduce((accumulator, eachElement) => {
  // el accumulador es donde guardaremos la reducción que estamos haciendo
  console.log("accumulator:", accumulator, "eachElement:", eachElement)
  return accumulator + eachElement
}, 0)

console.log("totalReduce", totalReduce) // suma de los elementos del array


let profesores = [
  { name: "Jorge", candy: 20 },
  { name: "Carolina", candy: 22 },
  { name: "Iñigo", candy: 14 },
  { name: "Phantom" }
]

let allNames = profesores.reduce((acc, eachPerson) => {
  return acc + eachPerson.name + " "
}, "Nombres: ")

console.log(allNames) // "Jorge Carolina Iñigo Phantom"

let allCandy = profesores.reduce((acc, eachPerson) => {
  // return acc + eachPerson.candy
  // siempre espera que le retornes el nuevo valor del accumular
  if (eachPerson.candy !== undefined) {
    return acc + eachPerson.candy
  } else {
    return acc
  }
}, 0)

console.log(allCandy)



// Actividad Reduce

//exercise 1: Return the total population of the given array (data) in the function 'totalpopulation' created below for you
// the function must return 0 if the array is empty
const data = [
  {
    country: 'USA',
    pop: 340,
  },
  {
    country: 'France',
    pop: 133,
  },
  {
    country: 'Bosnia',
    pop: 5,
  }
]

function totalpopulation(arr) {

  // clausulas de guardia
  if (arr.length === 0) {
    return 0
  }
   // since we are calculating total, initial value of accumulator is set to 0
   let total = arr.reduce((acc, elem) => {
      return acc + elem.pop
   }, 0)
  return total;
}

//Invoking and running the function
let total = totalpopulation(data)
console.log(total) // console output should be 478

let output = totalpopulation([])
console.log(output) // console output should be 0



// exercise 2: Given a menu of foods and their calories, 
// return the AVERAGE NUMBER of calories as a NUMBER and rounded to TWO DECIMALS for the entire list from the function
// the function must return null if the array is empty
// Note: Some elements don't have any calories, skip them in your reduce callback
// HINT: First calculate the total with .reduce . Then calculate the average
const menu = [
  { name: 'Carrots', calories: "150.45" },
  { name: 'Steak'},
  { name: 'Broccoli', calories: "120.2342" },
  { name: 'Chicken', calories: "250.6523" },
  { name: 'Pizza', calories: "520.124" }
];

// again... just an arrow function below.
const calAvgCalories = (arr) => {
    // clausulas de guardia
    if (arr.length === 0) {
      return 0
    }

   // ... your code here
   let sumCal = arr.reduce((acc, eachFood) => {
    if (eachFood.calories === undefined) {
      return acc
    } else {
      let num = Number(eachFood.calories)
      // let num = parseFloat(eachFood.calories)
      // let num = +eachFood.calories
      return acc + num // "150.45"
    }
   }, 0)

   let average = sumCal / arr.length
   return Number( average.toFixed(2) )

}

//Invoking and running the function
let output1 = calAvgCalories(menu)
console.log(output1) //Answer should be 208.29 

let output2 = calAvgCalories([])
console.log(output2) //Answer should be 0



// .reverse() => invierte el orden de los elementos de un arr. MUTA EL ARRAY ORIGINAL.


let orderedNumbers = [1, 2, 3, 4, 5] // ref 1234

// como hacer copias de array (clonar un array)
// structuredClone()
let cloneArray = structuredClone(orderedNumbers) // ref 9876
// let cloneArray = JSON.parse( JSON.stringify(orderedNumbers) ) // ref 7564
// JSON.stringify convierte cualquier tipo de data a su version string.

let reversedNumbers = cloneArray.reverse()

console.log("reversedNumbers", reversedNumbers)
console.log("orderedNumbers", orderedNumbers)

// reverse y sort son metodos que mutan el array original


// .sort() => ordena los elementos de un array de acuerdo a una funcion de orden. MUTA EL ARRAY ORIGINAL

let letterNoOrder = ["ac", "k", "aa", "p", "c"]


let lettersOrdered = letterNoOrder.sort()

console.log(lettersOrdered)


let numbersNoOrder = [7, 10, 2, 33, 6]

// aqui deberian clonar el array

let numbersOrdered = numbersNoOrder.sort((elem2, elem1) => {
  console.log(elem2, elem1)
  // el sort debe retornar un numero negativo (si el elemento va antes)
  // el sort debe retornar un numero positivo (si el elemento va despues)
  // el sort debe retornar un numero 0 (no deberia haber cambio)
  if (elem2 > elem1) {
    return 1
  } else if (elem1 > elem2) {
    return -1
  } else {
    return 0
  }
})

console.log(numbersOrdered)



const menuSort = [
  { name: 'Carrots', calories: "150.45" },
  { name: 'Steak'},
  { name: 'Broccoli', calories: "120.2342" },
  { name: 'Chicken', calories: "250.6523" },
  { name: 'Pizza', calories: "520.124" }
];

// aqui deberian clonar el array

let sortedFoods = menuSort.sort((elem2, elem1) => {
  if (elem2.name > elem1.name) {
    return 1
  } else if (elem2.name < elem1.name){
    return -1
  } else {
    return 0
  }
})

console.log(sortedFoods)