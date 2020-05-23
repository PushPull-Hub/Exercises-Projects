const clearElement = document.querySelector('.clear');
const dateElement = document.getElementById('date');
const listElement = document.getElementById('list');
const inputElement = document.getElementById('input');

const CHECK = 'fa-check-circle'; // Green
const UNCHECK = 'fa-circle-thin'; // White
const LINE = 'line-through';

function addTodo(todo, id, done, trash) {
  if (trash) {
    return trash;
  }
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE : '';
  const text = `<li class="item">
  <i class="fa ${DONE} " job="complete" id ="${id}"></i>
  <p class= ${LINE} > ${todo} </p>
  <i class="fa fa-trash-o delete" job="delete" id="${id}"></i>
  </li>`;
  const position = 'beforeend';
  listElement.insertAdjacentHTML(position, text);
}

let list = [];
let id = 0;
inputElement.addEventListener('keyup', function(event) {
  if (event.keyCode == 13) {
    const todo = inputElement.value;
    if (todo) {
      addTodo(todo, id, false, false);
      list.push({
        name: todo,
        id: id,
        done: false,
        trash: false,
      });
    }
    inputElement.value = '';
    id++;
  }
});

function completeTodo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector('p').classList.toggle(LINE);
  list[element.id].done = list[element.id].done ? false : true;
}

function removeTodo(element) {
  const listItem = element.parentNode;
  element.parentNode.parentNode.removeChild(listItem);
  list[element.id].trash = true;
}

listElement.addEventListener('click', function(event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob == 'complete') {
    completeTodo(element);
  }
  if (elementJob == 'delete') {
    removeTodo(element);
  }
});
// Strore on Browser
localStorage.setItem('todo', JSON.stringify(list));
