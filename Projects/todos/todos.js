const clear = document.querySelector('.clear');
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');

const CHECK = 'fa-check-circle'; // Green
const UNCHECK = 'fa-circle-thin'; // White
const LINE_TROUGH = 'lineTrought';

function addTodo(todo, id, done, trash) {
  if (trash) {
    return trash;
  }
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_TROUGH : '';
  const text = `<li class="item"><i class="fa ${DONE} " job="complete" id ="${id}"></i><p class= ${LINE} > ${todo} </p><i class="fa fa-trash-o delete" job="delete" id="${id}"></i></li>`;
  const position = 'beforeend';
  list.insertAdjacentHTML(position, text);
}

let List = [];
let id = 0;
input.addEventListener('keyup', function(event) {
  if (event.keyCode == 13) {
    const todo = input.value;
    if (todo) {
      addTodo(todo, id, false, false);
      List.push({
        name: todo,
        id: id,
        done: false,
        trash: false,
      });
    }
    input.value = '';
    id++;
  }
});

function completeTodo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.classList.toggle(LINE_TROUGH);
  List[element.id].done = List[element.id].done ? false : true;
}

function removeTodo(element) {
  let listItem = element.parentNode;
  element.parentNode.parentNode.removeChild(listItem);
  list[element.id].trash = true;
}

list.addEventListener('click', function(event) {
  element = event.target;
  const elementJob = event.target.attributes.job.value;
  if (elementJob == 'complete') {
    completeTodo(element);
  }
  if (elementJob == 'delete') {
    removeTodo(element);
  }
});
// Strore on Browser
localStorage.setItem('todo', JSON.stringify(List));
