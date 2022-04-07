var $box = document.querySelector('#box');
var boxX;
var baxY;
var isDragable = false;

$box.addEventListener('mousedown',function (e) {
    isDragable = true;
    boxX = parseInt($box.style.left);
    boxY = parseInt($box.style.top);
    console.log(boxX, boxY);
});

$box.addEventListener('mousemove',function (e) {
    if(isDragable) {
        boxX += e.movementX;
        boxY += e.movementY;
        $box.style.left = boxX + 'px';
        $box.style.top = boxY + 'px';
    }
});

$box.addEventListener('mouseup',function (e) {
    isDragable = false;
});

function initBox() {
    $box.style.left = '10px';
    $box.style.top = '10px';
}

initBox();