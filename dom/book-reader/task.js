const book = document.querySelector('.book');
const btn = document.querySelectorAll('.font-size');

btn.forEach((element) => element.addEventListener('click', (e) => {
  btn.forEach((element) => element.classList.remove('font-size_active'));
  e.target.classList.add('font-size_active');
  const {size} = e.target.dataset;
  book.classList.remove('book_fs-big', 'book_fs-small');
  book.classList.add('book_fs-' + size);
  e.preventDefault()
}));

