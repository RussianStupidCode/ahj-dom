import GameField from './core/GameField';

export default class GoblinGameField extends GameField {
  constructor(rowCount, columnCount, CellClass) {
    super(rowCount, columnCount, CellClass);
    this.el = document.createElement('div');
    this.el.classList.add('game-field');
  }

  activate({ column, row }) {
    this.checkFieldBoundary({ column, row });
    this.field[row][column].activate();
  }

  deactivate({ column, row }) {
    this.checkFieldBoundary({ column, row });
    this.field[row][column].deactivate();
  }

  clickCell({ column, row }) {
    this.checkFieldBoundary({ column, row });
    this.field[row][column].click();
  }

  addClickListener(callback) {
    this.el.addEventListener('click', callback);
  }

  render(parentElement) {
    parentElement.append(this.el);

    this.field.forEach((rowEl) => {
      rowEl.forEach((cell) => {
        cell.render(this.el);
      });
    });
  }
}
