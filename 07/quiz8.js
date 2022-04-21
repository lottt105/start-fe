const $box = document.getElementById("box");
const $min = document.getElementById("min");
const $max = document.getElementById("max");
const $btn = document.getElementById("btn");
let randomNum = 0;
let startNum = 0;
let upEvent = null;

function getRandomNum(min, max) {
    // min <= randomNum < max
    return Math.floor(Math.random() * (max - min)) + min;
}

function upNum() {
    $box.innerHTML = startNum;
    startNum += 1;
    $btn.disabled = true;
    if(startNum == randomNum) {
        clearInterval(upEvent);
        $box.innerHTML = randomNum;
        $btn.disabled = false;
    }
}

$btn.addEventListener("click", (e) => {
    let min = parseInt($min.value);
    let max = parseInt($max.value);
    if(!Number.isNaN(min) && !Number.isNaN(max)){
        console.log("true");
        randomNum = getRandomNum(min, max);
        console.log(randomNum);
        startNum = randomNum - 30;
        upEvent = setInterval(upNum, 50);
    }    
});
