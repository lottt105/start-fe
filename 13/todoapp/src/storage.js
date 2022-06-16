const key = 'todos';

function set(todos){
    window.localStorage.setItem(key, JSON.stringify(todos));
}
function get(){
    const localTodos = window.localStorage.getItem('todos') || '[]';
    const parseTodos = JSON.parse(localTodos);

    return parseTodos;
}

export {get, set}