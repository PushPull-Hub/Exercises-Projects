function showName() {
  let name = document.getElementById('input').value;
  return (document.getElementById(
    'paragraph',
  ).innerHTML = `Hello <span class="item animated fadeInDown">${name}</span>`);
}
