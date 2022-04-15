const $box = document.querySelector(".box");
const $bug = document.querySelector("#bug");
const $point = document.querySelector("#point");
const $life = document.querySelector("#life");

const bugWidth = $bug.offsetWidth;
const bugHeight = $bug.offsetHeight;
const boxWidth = $box.offsetWidth - bugWidth;
const boxHeight = $box.offsetHeight - bugHeight;
const bugSpeed = 1000; // 1000 = 1sec
let intervalID = 0;
let point = 0;
let life = 10;

function getRandomNum(max){
    return Math.floor(Math.random() * max);
}

function moveBug() {
    $bug.style.display = 'block';
    const X = getRandomNum(boxWidth);
    const Y = getRandomNum(boxHeight);
    $bug.style.left = `${X}px`;
    $bug.style.top = `${Y}px`;
}

function startBug() {
    clearInterval(intervalID);
    intervalID = setInterval(moveBug, bugSpeed);
}

function hitBug(e) {
    point++;
    $point.innerHTML = point;
    $bug.style.display = 'none';
    startBug();
    e.stopPropagation();
}

function minusLife() {
    life--;
    $life.innerHTML = life;
    if(life===0) {
        alert("Game Over");
    }
}

function init() {
    $bug.addEventListener('click', hitBug);
    $box.addEventListener('click', minusLife);
    startBug();
}

init();
