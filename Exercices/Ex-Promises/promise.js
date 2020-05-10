const posts = [
  { id: 1, text: 'Learn JavaScript' },
  { id: 2, text: 'Learn React' },
];
const third = { id: 3, text: 'Learn Angular' };

const getPosts = () => {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output = output + `<li>${post.text}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Something went wrong ');
      }
    }, 3000);
  });
};
createPost(third)
  .then(getPosts)
  .catch((err) => console.log(err));

////////////////////////////////////////////

// Promise.all
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'GoodBye');
});
const promise2 = 10;
const promise3 = Promise.resolve('Hello World !');
const promise4 = fetch(
  'https://jsonplaceholder.typicode.com/users',
).then((response) => response.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values),
);

// Async / Await
const init = async () => {
  await createPost(third);
  getPosts();
};
init();

// Async / Await / Fetch
const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
};
fetchUsers();
