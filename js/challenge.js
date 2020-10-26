let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let submit = document.getElementById("submit");

let likes = document.getElementsByClassName("likes");

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

heart.addEventListener("click", () => {

});

pause.addEventListener("click", () => {
    let buttons = [plus, minus, heart, submit];
    if(pause.innerHTML != "resume"){
        for(let el of buttons){
            el.disabled = true;
        }
        pause.innerHTML = "resume";
    } else {
        for(let el of buttons){
            el.disabled = false;
        }
        let timoute = window.setTimeout(window.alert, 1000, "resume");
        pause.innerHTML = "pause";
    }
});