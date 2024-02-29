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
const square = function(num){
    return num * num;
}

console.log(square(4));