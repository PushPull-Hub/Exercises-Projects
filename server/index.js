const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 3000;
const STATUS_CREATED = 201;
const STATUS_NO_CONTENT = 204;
const STATUS_NOT_FOUND = 404;

const app = express();

let todos = [
  { id: 1, text: 'Learn JavaScript ,', done: true },
  { id: 2, text: 'Seek for Job', done: false },
  { id: 3, text: 'Forget Everything' },
];

// GET http://localhost:3000/todos
app.get('/todos', (request, response) => {
  response.json(todos);
});
// GET
app.get('/todos/:id', (request, response) => {
  let id = parseInt(request.params.id);
  let index = findIndex(id);
  const todo = todos[index];
  if (index === -1) {
    response.status(STATUS_NOT_FOUND).send('Todo Not Found');
  }
  response.json(todo);
});

// function findIndex(id) {
//   let index = -1;
//   for (let i = 0; i < todos.length; i++) {
//     let todo = todos[id];
//     if (todos.id === id) {
//       index = i;
//     }
//   }
//   return index;
// }

app.listen(PORT, () => console.log('Server up and running on port 3000'));

function findIndex(id) {
  return todos.findIndex(todo => todo.id === id);
}
