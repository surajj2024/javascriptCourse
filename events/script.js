let v2 = document.querySelector("#v2");

function scream() {
  console.log("Hellooooooo");
}
v2.onclick = scream;

let v3 = document.querySelector("#v3");

v3.addEventListener("dblclick", () => {
  console.log("Used it nice");
});

let input = document.querySelector("#text");

// input.addEventListener("keydown", function (e) {
//   console.log(e.code);
//   console.log(e.key);
// });

// change event
/* input.addEventListener("change", function (e) {
  console.log("changed");
}); */

// input event
input.addEventListener("input", function(e){
  console.log(e.data);
})