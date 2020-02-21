let todos = [
  { id: 1, text: `Learn JavaScript`, completed: true },
  { id: 2, text: `Seek For a Job`, completed: false },
  { id: 3, text: `Forgot Everything`, completed: true },
];

function render() {
  document.querySelector(`ul`).innerHTML = todos
    .map(todo => ` <li> ${todo.text}</li> `)
    .join(`\n`);
}
render();

document.querySelector('form').onsubmit = function(event) {
  event.preventDefault();

  let todo = { id: 4, text: 'Eat your vegetables' };
  todos.push(todo);
  render();
};

// function generateId (){
// let newId= todo[ todos.lenght-1 ].id
