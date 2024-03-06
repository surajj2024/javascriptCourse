let button = document.querySelector("button");
let h1 = document.querySelector("h1");

button.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let a = Math.random();
    let randomColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    document.body.style.backgroundColor = randomColor;
    let allColor = r + g + b + a;
    if (allColor < 150) {
        h1.classList.add("white");
    }
    else{
        h1.classList.remove("white");
    }
    h1.innerText = randomColor;
});