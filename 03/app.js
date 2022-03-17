console.log('03');

// 타입변환
// var foo = 42;
// var foo = "bar";
// var foo = true;

// if("test"){
//     console.log("true");
// }

// 원시타입
// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

// 참조타입 (위치만 저장)
// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// var a = {x:1};
// var b=a;
// b.x= 2;
// console.log(a, b);

// // call by value
// function byValue(count){
//     count = count + 2;
// }
// var count = 3;
// byValue(count);
// console.log(count); // 3

// // call by reference
// function byReference(count){
//     count.push('2'); 
// }
// var count = ["1"];
// byReference(count);
// console.log(count); // ["1","2"]

// if문
// var isMan = true;
// if (isMan) {
//     console.log('남자');
// } else {
//     console.log("나는 여자인가?")
// }
// // 삼항 연산자
// var gender = isMan ? '남자' : '여자';

// // for in (느림, 비권장)
// var obj = {a:1, b:2};
// for (var prop in obj) {
//     console.log(prop, obj[prop]);
// }

// // 함수 : return문에 계산식이 들어가는게 좋음?, return문이 없는 경우, undefined 반환
// function sum(x){
//     var y = 1;
//     return x + y;
// }

// var isDelete = confirm("삭제하시겠습니까?");
// if(isDelete) {
//     console.log("삭제완료");
// } else {
//     console.log("삭제취소");
// }

// var enc = encodeURIComponent('카카오');
// console.log(enc);
// var dec = decodeURIComponent(enc);
// console.log(dec);

// function test(){
//     console.log('test()');
// }

// var id = setTimeout(test, 1000); //1초에 1번 실행 (비동기)
// var id = setInterval(test, 1000) //1초마다 계속 실행

// //호이스팅(Hoisting) : 상단에서 변수 선언
// var name = 'global';
// function test(){
//     console.log(name);
//     var name ='local';
//     console.log(name);
// }
// test()

// 여러가지 함수 모양 - 익명 즉시실행함수, 스코프 보호, 예전에 자주 씀
// 스코프 안에서 바로 실행되므로 다른 함수와 충돌X
// (function() {
//     //코드
// })();

// //가변 길이 전달인자
// function sum() {
//     var size =0;
//     for( var i =0; i< arguments.length; i++) {
//         size += arguments[i];
//     }
// }

// sum(1, 2, 3, 4, 5, 6, 7);

// 정규표현식 - ex) 전화번호나 이메일의 형식이 잘 입력되었는지 확인

// // .test()
// var text = "abc def ghi jkl"; ///대상 문자열
// var testReg = /abc/;
// var result = testReg.test(text)
// console.log(result);

// // .match()
// var text = "abc def ghi jkl"; ///대상 문자열
// var matchReg = /abc/;
// var result = text.match(matchReg);
// console.log(result);

// .replace()
// var text = "abc def ghi jkl"; ///대상 문자열
// var replaceReg = /def/;
// var result = text.replace(replaceReg, '가나다');
// console.log(result);

// var str = 'jeju';
// console.log(str.substring(0, 2)); //String 래퍼객체로 자동변환

// var str = new String('jeju');
// console.log(str + ' jeju');

function aCreate(todos, todo) {
    todos.push(todo);
    console.log(todos);
}

function aRead(todos){
    todos.forEach(function(todo) {
        console.log(todo);
    });
}

function aUpdate(todos, updateTodo){
    var updateIndex = todos.findIndex(function(todo) {
        return todo === updateTodo;
    });
    todos[updateIndex] = '공부';
    console.log(todos);
}

function aDelete(todos, deleteTodo) {
    var deleteIndex = todos.findIndex(function(todo) {
        return todo === deleteTodo;
    });
    todos.splice(deleteIndex, 1);
    console.log(todos);
}

var todos = ['운동'];
var todo = '게임';
var updateTodo = '게임';
var deleteTodo = '운동';
aCreate(todos, todo);
aRead(todos);
aUpdate(todos, updateTodo);
aDelete(todos, deleteTodo);