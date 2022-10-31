import { LIST_SECTION, FORM_SECTION, CONTACT_SECTION } from './modules/sections.js';
import BookCollection from './modules/bookCollection.js';
import { clearClasses, toggleLoader, navigate } from './modules/navigation.js';
import generateBookCollection from './modules/generateHtml.js';
import displayTime from './modules/time.js';

const listLink = document.querySelector('.list-li');
const addLink = document.querySelector('.add-new');
const contact = document.querySelector('.contact-li');

const form = document.querySelector('.add-form');

const collection = new BookCollection();
collection.getBooks();

navigate(LIST_SECTION);

const render = () => {
  const bookConatiner = document.querySelector('.list-Container');
  const bookTitle = document.querySelector('.book-conatiner h1');
  bookConatiner.replaceChildren('');
  if (collection.books.length > 0) {
    bookTitle.textContent = 'All Awesome Books';
    const books = generateBookCollection(collection.books);
    bookConatiner.insertAdjacentHTML('beforeend', books);
  } else {
    bookTitle.textContent = 'No Books Added';
  }

  const removeBtns = document.querySelectorAll('.btn');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      collection.remove(event.target.id);
      render();
    });
  });
};

const navigateTo = (section) => {
  clearClasses();
  toggleLoader();
  setTimeout(() => {
    toggleLoader();
    navigate(section);
  }, 1000);
};

window.addEventListener('load', render);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { title, author } = form.elements;
  if (title.value && author.value) {
    const book = {
      title: title.value,
      author: author.value,
    };
    collection.add(book);
    render();
    title.value = '';
    author.value = '';
    navigateTo(LIST_SECTION);
  }
});

listLink.addEventListener('click', () => navigateTo(LIST_SECTION));

addLink.addEventListener('click', () => navigateTo(FORM_SECTION));

contact.addEventListener('click', () => navigateTo(CONTACT_SECTION));

document.querySelector('.nav-logo').addEventListener('click', () => navigateTo(LIST_SECTION));

setInterval(displayTime, 1000);
