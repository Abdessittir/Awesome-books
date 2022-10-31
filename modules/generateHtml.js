const generateBookItem = (book, index) => `
  <li class=${index % 2 === 0 ? 'even' : 'odd'}>
    <p>${book.title} by ${book.author}</p>
    <button id=${book.id} class="btn">Remove</button>
  </li>
  `;

const generateBookCollection = (collection) => {
  let items = '';

  collection.forEach((book, index) => {
    items += generateBookItem(book, index);
  });
  return `
    <ul class="book-list bg">${items}</ul>
  `;
};

export default generateBookCollection;