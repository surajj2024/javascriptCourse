// let user = {}; // Create an empty object user.
// user.name = "John"; // Add the property name with the value John.
// user.surname = "Smith"; // Add the property surname with the value Smith.
// user.name = "Pete"; // Change the value of the name to Pete.
// delete user.name; // Remove the property name from the object.
// console.log(user);

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// let schedule = {};
// console.log(isEmpty(schedule)); // true
// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule)); // false

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }

// console.log(sum); // Output: 390

let calculator = {
  read() {
    this.a = parseFloat(prompt("Enter the first value:", 0));
    this.b = parseFloat(prompt("Enter the second value:", 0));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

