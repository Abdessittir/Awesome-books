import { LIST_SECTION, FORM_SECTION, CONTACT_SECTION } from './sections.js';

const listLink = document.querySelector('.list-li');
const addLink = document.querySelector('.add-new');
const contact = document.querySelector('.contact-li');

const listSection = document.querySelector('.book-conatiner');
const formSection = document.querySelector('.form-conatiner');
const contactSection = document.querySelector('.contact-conatiner');

const clearClasses = () => {
  listLink.classList.remove('change-color');
  addLink.classList.remove('change-color');
  contact.classList.remove('change-color');

  listSection.classList.remove('show-container');
  formSection.classList.remove('show-container');
  contactSection.classList.remove('show-container');
};

const toggleLoader = () => {
  const loader = document.querySelector('.loader');
  loader.classList.toggle('show-loader');
};

const navigate = (section) => {
  switch (section) {
    case LIST_SECTION:
      listLink.classList.add('change-color');
      listSection.classList.add('show-container');
      break;

    case FORM_SECTION:
      addLink.classList.add('change-color');
      formSection.classList.add('show-container');
      break;

    case CONTACT_SECTION:
      contact.classList.add('change-color');
      contactSection.classList.add('show-container');
      break;

    default:
  }
};

export { clearClasses, toggleLoader, navigate };