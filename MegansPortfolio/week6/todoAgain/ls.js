function saveLocalTodos(todo) {
    //check for task items
    let todos;
    if(localStorage.getItem('todos') === null ) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    //check for task items
    let todos;
    if(localStorage.getItem('todos') === null ) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}

function removeLocalTodos(todo) {
    let todos = getTodos();
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    
}
export default {
    saveLocalTodos,
    getTodos,
    removeLocalTodos
}