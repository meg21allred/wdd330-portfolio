import ls from './ls.js'

const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

// function removeLocalTodos(todo) {
//     let todos = ls.getTodos();
//     const todoIndex = todo.children[0].innerText;
//     todos.splice(todos.indexOf(todoIndex), 1);
//     localStorage.setItem("todos", JSON.stringify(todos));
    
// }

//delete or check off item
function deleteCheck(e) {
    const item = e.target;

    //DELETE TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        ls.removeLocalTodos(todo);
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }

    //COMPLETE TASK
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

//Create the items of a task
function createListItems() {
    //TODO DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    //TODO LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //ADD TODO TO LOCAL STORAGE
    ls.saveLocalTodos(todoInput.value);

    //COMPLETED BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton);

    //TRASH BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);
}

//Add listItems to the display
function addTodo(event) {
    event.preventDefault();

    createListItems();
    
    //CLEAR INPUT VALUE
    todoInput.value = "";
}

//filter completed tasks
function filterTodo(e) {
    const todos = todoList.childNodes;

    console.log('function is called');
    console.log(todos);
    todos.forEach(todo => {
        switch (e.target.value) {
            case "all":
            todo.style.display = "flex";
            break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
            break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
            break;
        }
    });
}


function renderList() {
    let todos = ls.getTodos();

    todos.forEach(todo => {
        //TODO DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add('todo');

        //TODO LI
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        //COMPLETED BUTTON
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn")
        todoDiv.appendChild(completedButton);

        //TRASH BUTTON
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        //APPEND TO LIST
        todoList.appendChild(todoDiv);
    })    



}
export default {
    deleteCheck,
    addTodo,
    filterTodo,
    renderList
}