/*
2주차 실습
*/

var name = 'hb';
name = 111;
// 이름을 찍는다
console.log(name);

var isMan = 'true';
var isMan1 = true;
console.log(isMan);
console.log(isMan1);

//function
function log(str) {
    console.log(str);
}
log("hello");

//object(객체)
var img = {};
img.width = 100;
img.height = 500;
console.log(img);

//배열
var arr = [1, 2, 3];
console.log(arr);

//연산자
console.log(1 + 1);
console.log(name + " hello");
console.log(1 + "4");

//typeof
console.log(typeof(1 + '4'));
typeof foo !=='undefined';

//object 추가 예제
//json은 서버와 클라이언트가 통신할 때 사용됨(api)
var person = {
    age: 23,
    name: 'hb',
    sayHello: function() {
        console.log('hello');
    },
};
person.sayHello();


//배열 추가 예제
console.log(arr.length);
for (var i=0;i<arr.length;i++) {
    console.log(arr.length);
}

//배열 - creat
var article = {
    title: '제목1',
    url: 'http://naver.com',
};

var articles = [article];
console.log(articles);

var todos = ['운동'];
var todo = '게임';
todos.push(todo);

console.log(todos);

//배열 - read
todos.forEach(function(todo) {
    console.log(todo);
});

//배열 - update
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
    return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

//배열 - delete
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
    return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);