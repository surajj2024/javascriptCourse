let buttons = document.querySelectorAll("button");
let h1s = document.querySelectorAll("h1");

let randomColorGenerator = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let a = Math.random();
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

let bgAndColorGen = function () {
    this.style.backgroundColor = randomColorGenerator();
    this.style.color = randomColorGenerator();
};

for (const btn of buttons) {
    btn.addEventListener(
        "click",
        bgAndColorGen
        //   function () {
        //     this.style.backgroundColor = randomColorGenerator();
        //     this.style.color = randomColorGenerator();
        //   }
    );
}

for (const h1 of h1s) {
    h1.addEventListener("click", bgAndColorGen);
}