const listElement = document.querySelector('#list');
const inputElement = document.getElementById('input');
const dateElement = document.getElementById('date');
const clearElement = document.querySelector('.clear');
const CHECK = 'fa-check-circle'; // Green Circle
const UNCHECK = 'fa-circle-thin'; // White Circle
const LINE = 'line-through';
let list = [];
let id = 0;
const option = { weekday: 'long', month: 'short', year: 'numeric' };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString('en-uk', option);

function addTodo(todo, id, done, trash) {
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : '';
  const text = `<li class="item">
  <i id="${id}" class="fa ${DONE} co" job= "complete"  ></i>
  <p class="text" class="${LINE}" >${todo}</p>
  <i id="${id}" class="fa fa-trash-o delete de" job="remove" ></i>
  </li>`;
  const position = 'beforeend';
  if (trash) {
    return trash;
  }
  listElement.insertAdjacentHTML(position, text);
}

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
      id++;
    }
    inputElement.value = '';
  }
});

function completeTodo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector('p').classList.toggle(LINE);
  list[element.id].done = list[element.id].done ? false : true;
}

function removeTodo(element) {
  listItem = element.parentNode;
  listItem.parentNode.removeChild(listItem);
  list[element.id].trash = true;
}

listElement.addEventListener('click', function(event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob == 'complete') {
    completeTodo(element);
  }
  if (elementJob == 'remove') {
    removeTodo(element);
  }
});

clearElement.addEventListener('click', function clearList() {
  location.reload();
});
