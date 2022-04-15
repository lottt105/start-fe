const $box = document.querySelector('#box');

let offset = {x:0, y:0};
let isDragable = false;

$box.addEventListener('mousedown',(e) => {
    isDragable = true;
    console.log('mousedown');
    offset.x = $box.offsetLeft - e.clientX;
    offset.y = $box.offsetTop - e.clientY;
    // console.log(boxX, boxY);
});

document.body.addEventListener('mousemove',(e) => {
    console.log('mousemove');
    if (!isDragable) return;
    $box.style.left = e.clientX + offset.x;
    $box.style.top = e.clientY + offset.y;
});

$box.addEventListener('mouseup',(e) => {
    isDragable = false;
    console.log('mouseup');
});