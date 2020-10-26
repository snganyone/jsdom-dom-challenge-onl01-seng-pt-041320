let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");

let counter = document.getElementById("counter");
let num = 0

minus.addEventListener("click", () => {
    num--;
    counter.innerHTML = num;
});

plus.addEventListener("click", () => {
    num++;
    counter.innerHTML = num;
});