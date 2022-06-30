import FilmList from './core/FilmsList';

export default class SimpleFilmList extends FilmList {
  constructor(films, filmAttributes) {
    super(films, filmAttributes);
    this.el = document.createElement('table');

    this.currentSortAttribute = 0;

    this.generateTable();
  }

  recreateTable(films) {
    const parent = this.el.parentNode;

    this.films = films;
    this.el.remove();
    this.el = document.createElement('table');
    this.generateTable();

    if (parent) {
      this.render(parent);
    }
  }

  generateTable() {
    const headers = this.filmAttributes.map(
      (el) => `<th class="table-cell">${el}</th>`
    );
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
