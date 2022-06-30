import FilmList from './core/FilmsList';

export default class SimpleFilmList extends FilmList {
  constructor(films, filmAttributes, sortAttribute) {
    super(films, filmAttributes);
    this.el = null;

    this.recreateTable(films, sortAttribute);
  }

  recreateTable(films, sortAttribute) {
    const parent = this.el ? this.el.parentNode : null;

    if (this.el) {
      this.el.remove();
    }

    this.films = films;

    this.el = document.createElement('table');
    this.generateTable(sortAttribute);

    if (parent) {
      this.render(parent);
    }
  }

  generateTable(sortAttribute) {
    const headers = this.filmAttributes.map((el) => {
      const head = el === sortAttribute ? `${el} ↓` : el;
      return `<th class="table-cell">${head}</th>`;
    });

    this.el.innerHTML = `
    <caption>Фильмы</caption>
    <thead><tr> ${headers.join('')}</tr></thead>
    <tbody></tbody>`;

    const tableBody = this.el.querySelector('tbody');

    this.films.forEach((film) => {
      tableBody.insertAdjacentElement('beforeEnd', this.filmToTableRow(film));
    });
  }

  filmToTableRow(film) {
    const tableRow = document.createElement('tr');

    this.filmAttributes.forEach((el) => {
      tableRow.dataset[el] = film[el];
    });

    const filmHTML = this.filmAttributes.map(
      (el) => `<td class="table-cell">${film[el]}</td>`
    );

    tableRow.insertAdjacentHTML('beforeEnd', `<tr>${filmHTML.join('')}</tr>`);
    return tableRow;
  }

  render(parentElement) {
    parentElement.insertAdjacentElement('beforeEnd', this.el);
  }
}
