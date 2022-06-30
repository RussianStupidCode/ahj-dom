import { getRandomInteger } from './utils';

export default class GoblinGame {
  constructor(gameField) {
    this.gameField = gameField;

    this.activeCellPosition = null;
    this.setListeners();
  }

  setListeners() {
    this.gameField.addClickListener((event) => {
      const { target } = event;

      const cell = target.closest('.cell');

      if (!cell) {
        return;
      }

      const position = {
        row: Number(cell.dataset.row),
        column: Number(cell.dataset.column),
      };

      this.gameField.clickCell(position);
    });
  }

  start() {
    this.gameField.render(document.querySelector('.task-field'));

    setInterval(() => {
      const position = {
        row: getRandomInteger(0, this.gameField.rowCount),
        column: getRandomInteger(0, this.gameField.columnCount),
      };

      while (
        this.activeCellPosition &&
        position.row === this.activeCellPosition.row &&
        position.column === this.activeCellPosition.column
      ) {
        position.row = getRandomInteger(0, this.gameField.rowCount);
        position.column = getRandomInteger(0, this.gameField.columnCount);
      }

      this.changeActiveCell(position);
    }, 2000);
  }

  changeActiveCell(newPosition) {
    if (this.activeCellPosition) {
      this.gameField.deactivate(this.activeCellPosition);
    }
    this.gameField.activate(newPosition);
    this.activeCellPosition = newPosition;
  }
}
