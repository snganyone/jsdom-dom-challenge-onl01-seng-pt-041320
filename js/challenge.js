let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");

let counter = document.getElementById("counter");

minus.addEventListener("click", () => {
    counter.innerHTML -= 1;
});

plus.addEventListener("click", () => {
    counter.innerHTML += 1;
});