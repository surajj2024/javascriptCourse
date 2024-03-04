const array = ["suraj", "sam", "currran", "Dhoni"];

/* for(let i = 0; i < array.length; i++){
    console.log(`here we go ${array[i]}`);
} */

/* for (const name of array) {
    console.log(`here we go ${name}`);
} */

/* const number = [1, 2, 3, 4, 5, 6, 7];


for (const square of number) {
    console.log(`square of ${square} is : ${square * square}`);
} */
/* 
function loveHearts(){
    console.log("<3");
}

loveHearts(); */
/* 
function rant(message){
    for(let i = 0; i < 3; i++){
        console.log(`${message.toUpperCase()}`);
    }
}

rant("i hate beets"); */

// snake eyes
/* function snakeEyes(die1, die2){
    if(die1 === 1 && die2 === 1 ){
        console.log("snakeEyes");
    }else{
        console.log("UHHHHHHHHH repeat");
    }
}

snakeEyes(1, 1);
snakeEyes(2, 3);
snakeEyes(4, 1);
snakeEyes(3, 3); */

/* function isShortsWeather(temp){
    if(temp >= 75){
        return true;
    }else{
        return false;
    }
}

console.log(isShortsWeather(80));
console.log(isShortsWeather(48));
console.log(isShortsWeather(75));
 */

/* 
function lastElement(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return null;
    } else {
        // Return the last element of the array
        return arr[arr.length - 1];
    }
}

// Test cases
console.log(lastElement([1, 2, 3, 4])); // Output: 4
console.log(lastElement([])); // Output: null
console.log(lastElement(["apple", "banana", "orange"])); // Output: "orange"
 */

/* function sumArray(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans += arr[i];
  }
  return ans;
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([3, 3, 3, 3]));
console.log(sumArray([10, 100]));
 */
/* 
function multi(num1, num2){
    return (num1 * num2);
}

console.log(multi(2,2)); */

// function expressions
/* const square = function(num){
    return num * num;
}

console.log(square(4)); */

// HOF function(High order function)
/* function callTwice(func) {
    func();
    func();
}

function rollDice() {
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

// callTwice(rollDice()); //error here
callTenTimes(rollDice); */

/* function makeHistory() {
  const random = Math.random();
  if (random > 0.5) {
    return function () {
      console.log("Here are larger numbers");
      alert("Larger are on the way");
    };
  } else {
    return function () {
      console.log("Here are smaller numbers");
      alert("smaller are on the way");
    };
  }
} */

//const make = makeHistory();
//make();

// Methods
/* const myMath = {
    PI: 3.14,
    square: function(num){
        return num ** 2;
    },
    cube: function(num){
        return num ** 3;
    },
    // shorthand 
    add(x, y){
        return x * y;
    },
    sub(x, y, z){
        return ((x - y) - z);
    }
} */

// this keyword
/* const name = {
    name: "sandy",
    age: 23,
    DOB: "20/05/2000",
    crave(){
        console.log(`${this.name} is craving or food`);
        console.log(this);
    }
}

name.crave(); */

/* const hen = {
    name: "hen",
    eggCount: 0,
    layEggs(){
        this.eggCount++;
        console.log("EGG++");
    }
} */

// Arrow function
/* const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(2, 2)); */

//
/* const greet = (name) => {
    console.log(`Hello ${name}`);
}
 */

// filter
/* let movie = [{
        name: "DIN",
        year: 2000,
        rating: 10,
    },
    {
        name: "MIN",
        year: 2023,
        rating: 2,
    },
    {
        name: "SIN",
        year: 2022,
        rating: 9,
    },
    {
        name: "FIN",
        year: 1999,
        rating: 7,
    },
];

const newMovie = movie.filter((movies) => {
    return movies.year > 2000;
});

const highest = movie.filter((movies) => {
    return movies.year > 2000;
}).map((movie) => {
    return movie.name;
})

console.log(highest); */

//reduce
const numbers = [12, 34, 46, 78, 89, 99, 78, 90, 9];
/* 
let total = 0;
for (const num of numbers) {
    total += num;
}

console.log(total); */

/* const total = numbers.reduce((total, price) => {
    return total + price;
});

/* const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(total);
 */
/* 
const minPrice = numbers.reduce((min, price) => {
    if(price < min){
        return price;
    }
    return min;
});

console.log(minPrice); */

// default params
// function rollDice(numTimes) {
//     //old way to defining default params
//     /* if (numTimes === undefined) {
//         numTimes = 6;
//     } */
//     return Math.floor(Math.random() * numTimes) + 1;
// }
/* 
function rollDice(numTimes = 6) {
    return Math.floor(Math.random() * numTimes) + 1;
} */

// spread
/* Math.max(20, 22, 23, 3, 49); // 49

const nums = [20, 22, 23, 3, 49];

let ans = Math.max(nums);
console.log(ans); //NaN

let finalAns = Math.max(...nums);
console.log(finalAns); //49
console.log(...nums);  // 20 22 23 3 49 */

/* let cats = ["meow", "chiie"];
let dogs = ["woof", "HYYEEE", "WHOOOEESSS"];

let animal = [...cats, ...dogs, "speedy", "slowly"];
console.log(animal);
 */
/* 
let twoLegs = {
    chicken: true,
    family: "Indian"
};

let fourLegs = {
    goat: true,
    family: "Australian"
}

// let both = {...twoLegs, ...fourLegs}
let both = {...fourLegs, ...twoLegs, isAvailable: true, family: "janwar"}
console.log(both);

// let arrayToObj = {...["suraj"]}; //{ '0': 'suraj' }
//let arrayToObj = {...[1, 2, 3, 4]}; //{ '0': 1, '1': 2, '2': 3, '3': 4 }
let arrayToObj = {..."Hello"}; //{ '0': 'H', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }
console.log(arrayToObj);
 */

// REST
/* function sum(){
  console.log(arguments); //arguments is not actual array that is why reduce is not working
  return arguments.reduce((total, el) => total + el); //arguments.reduce is not a function
} */

/* function sum(...nums) { //rest
  //nums is real actual array
  console.log(nums);
  return nums.reduce((total, el) => total + el);
}

//sum(); //[Arguments] {}
sum(2, 3, 4, 10, 29); //[Arguments] { '0': 2, '1': 3, '2': 4, '3': 10, '4': 29 }

let ans = sum(2, 1);
console.log(ans);

function raceResult(gold, silver, ...everyoneElse){
    console.log(`Our gold goes to ${gold}`);
    console.log(`Our silver goes to ${silver}`);
    console.log(`Thanks for there:  ${everyoneElse}`);
}

raceResult("suraj", "racer", "avi", "kabi", "kahs"); */

// Destructuring array
/* const scores = [1500, 1200, 1111, 1000, 200];

const first = scores[0];
const second = scores[1];

console.log(first); //1500
console.log(second); //1200

const [gold, silver, bronze, ...everyoneElse] = scores;
console.log(gold); //1500
console.log(silver); //1200
console.log(bronze); //1111
console.log(everyoneElse); //[ 1000, 200 ] */

//Destructuring objects
const person = {
    firstName: "ravi",
    middleName: "Ranajan",
    lastName: "dutta",
    email: "ravi@gmail.com",
    age: 34,
    isAlive: true,
    state: "Bihar",
};

// const firstName = person.firstName;
// const lastName = person.lastName;
/* 
const {
    middleName,
    firstName,
    email,
    lastName,
    ...otherInfo
} = person;

const {
    state: city, //it has variable name as city now on,
    country = "India",
} = person;

console.log(firstName); //ravi
console.log(middleName); //ranjan
console.log(lastName); //dutta
console.log(email); //ravi@gmail.com
console.log(otherInfo); //{ age: 34, isAlive: true, state: 'Bihar' }

console.log(city); //Bihar
console.log(country); //India
 */


// param destructuring
/* function fullName(person){
    return `${person.firstName} ${person.lastName}`;
} */

/* function fullName(person){
    const {firstName, lastName, middleName} = person;
    return `${firstName} ${middleName} ${lastName}`;
} */

function fullName({
    firstName,
    lastName,
    middleName
}) {
    return `${firstName} ${middleName} ${lastName}`;
}

console.log(fullName(person)); //ravi ranjan dutta