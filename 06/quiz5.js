let offset = {x:0, y:0};
let isDragable = false;

let $dragEl = null;
let position = 10;

document.body.addEventListener('mousemove',(e) => {
    console.log('mousemove');
    if (!isDragable) return;
    $dragEl.style.left = e.clientX + offset.x;
    $dragEl.style.top = e.clientY + offset.y;
});

document.addEventListener('mouseup',(e) => {
    isDragable = false;
    console.log('mouseup');
});

function startDrag(el) {
    el.addEventListener('mousedown',(e) => {
        $dragEl = el;
        isDragable = true;
        console.log('mousedown');
        offset.x = $dragEl.offsetLeft - e.clientX;
        offset.y = $dragEl.offsetTop - e.clientY;
        // console.log(boxX, boxY);
        $dragEl.style.zIndex = position++
    });
}

const $box1 = document.querySelector('.box1');
const $box2 = document.querySelector('.box2');

startDrag($box1);
startDrag($box2);