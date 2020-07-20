import utils from './utils.js'

//selectors
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo');

//event listeners
utils.renderList();
todoButton.addEventListener('click', e => {
    utils.addTodo(e);
    
});
todoList.addEventListener('click', e => {
    utils.deleteCheck(e);
});
filterOption.addEventListener('click', e => {
    utils.filterTodo(e)
});

