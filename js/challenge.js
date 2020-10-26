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
    let currentcount = counter;
    // let currentlike = likes.querySelector(`#li-${currentcount}`);
    // if(currentlike != null){
    //     num++;
    //     li.innerHTML = `${currentcount} has been clicked ${num} times`;
    // } else{
    //     let num = 1;
    //     let li = document.createElement('li');
    //     li.id = `li-${currentcount}`;
    //     li.innerHTML = `${currentcount} has been clicked ${num} times`;
    //     likes.appendChild(li);
    // }
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
        pause.innerHTML = "pause";
    }
});