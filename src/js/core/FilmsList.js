/* eslint class-methods-use-this: "off" */
/* eslint no-unused-vars: "off" */

export default class FilmList {
  constructor(films, filmAttributes) {
    this.films = films;
    this.filmAttributes = filmAttributes;
  }

  recreateTable(films) {
    throw new Error('"recreateTable" not implement');
  }

  render(parentElement) {
    throw new Error('"render" not implement');
  }
}
