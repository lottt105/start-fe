const $btn = document.querySelector("#btn");
const $num = document.querySelector("#num");
const $result = document.querySelector("#result")


$btn.addEventListener('click',(e) => {
    $result.innerHTML = "";
    let n = $num.value;
    console.log(isNaN(n));
    if (isNaN(n)) {
        alert("숫자를 입력해주세요")
    }
    else {
        for(var i=1; i<=9; i++){
            let div = document.createElement('div');
            let textNode = document.createTextNode(`${n} x ${i} = ${n*i}`); 
            div.appendChild(textNode);
            $result.appendChild(div);
        }    
    }   
});