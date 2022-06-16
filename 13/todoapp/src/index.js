import { log } from './utils';
import { printTodos } from './print-todos';
import { init as initForm } from './form';
import './todos.css';
import { get as getStorage} from './storage';


const todos = getStorage() || [];

const deleteTodo = (index) => {
    console.log('delete', index);
    // todos에서 index번째 todo 삭제
    todos.splice(index, 1);
    print();
};
const toggleTodo = (index) => {
    console.log('toggle');
    //index에 맞는 todo.isDone을 반전
    todos[index].isDone = !todos[index].isDone;
    print();
};

const print = () => {
    printTodos(todos);
};



// 삭제, isDone
document.body.addEventListener('click', (e) => {
    const index = parseInt(e.target.parentNode.dataset.index);
    if(e.target.className==='delete'){
        deleteTodo(index);
    }
    else if(e.target.className==='toggle-checked'){
        toggleTodo(index);
    }
})

initForm(todos);
//todos 뿌려주기
print();