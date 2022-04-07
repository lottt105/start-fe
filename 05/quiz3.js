var $btnAddRed = document.querySelector(".add-red");
var $btnAdd = document.querySelector(".add-btn");
var $btnDelete = document.querySelector(".delete-btn");
var $btnText = document.querySelector(".text-btn");
var $btnReset = document.querySelector(".reset-btn");
var $btnToggle = document.querySelector(".toggle-btn");
var $btnImg = document.querySelector(".image-btn");
var $textbox = document.querySelector(".txt");

function addRed() {
    var $boxes = document.querySelectorAll('.box');
    $boxes.forEach(function ($box) {
        $box.classList.add('red');
    });
}


function addBox() {
    var $currentBox = document.querySelector('.box');
    var $newBox;
    if ($currentBox) {
        $newBox = $currentBox.cloneNode(true);
        // console.log($newBox);
        document.body.appendChild($newBox);
    }
    else {
        $newBox = createBox();
    }
}

function delBox() {
    var $box = document.querySelector('.box');
    if ($box) $box.remove();
}

function addText() {
    var text = $textbox.value;
    var $boxes = document.querySelectorAll('.box');
    $boxes.forEach(function ($box) {
        $box.innerHTML = text;
    });
}

function resetBox() {
    var $boxes = document.querySelectorAll('.box');
    $boxes.forEach(function ($box) {
        $box.remove();
    });
}

function toggleBox() {
    var $boxes = document.querySelectorAll('.box');
    $boxes.forEach(function ($box) {
        $box.hidden = !$box.hidden;
    });
}

function addImg() {
    var $boxes = document.querySelectorAll('.box');
    var img = "<img src='https://i.imgur.com/69NjYBH.png', alt='star_image'></img>";
    var $newBox;
    if ($boxes) {
        $boxes.forEach(function ($box) {
            $box.innerHTML = img;
        });
    }
    else {
        $newBox = createBox();
        $newBox.innerHTML = img;
    }
}

function createBox() {
    $newBox = document.createElement("div");
    $newBox.classList.add('box');
    document.body.appendChild($newBox);
    return $newBox;
}

$btnAddRed.addEventListener('click',addRed);
$btnAdd.addEventListener('click',addBox);
$btnDelete.addEventListener('click',delBox);
$btnText.addEventListener('click',addText);
$btnReset.addEventListener('click',resetBox);
$btnToggle.addEventListener('click',toggleBox);
$btnImg.addEventListener('click',addImg);