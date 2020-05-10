const posts = [
  { id: 1, text: 'Learn JavaScript' },
  { id: 2, text: 'Learn React' },
];
const third = { id: 3, text: 'Learn React' };

const getPosts = () => {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output = output + `<li>${post.text}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
};

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 3000);
};

createPost(third, getPosts);
