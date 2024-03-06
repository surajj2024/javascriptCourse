let v2 = document.querySelector("#v2");
function scream() {
  console.log("Hellooooooo");
}
v2.onclick = scream;

let v3 = document.querySelector("#v3");

v3.addEventListener('dblclick', () => {
  console.log("Used it nice");
});

