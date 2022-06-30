/* eslint class-methods-use-this: "off" */
/* eslint no-unused-vars: "off" */

export default class GameField {
  constructor(rowCount, columnCount, CellClass) {
    this.columnCount = columnCount;
    this.rowCount = rowCount;
    this.CellClass = CellClass;
    this.field = null;

    this.init();
  }

  checkFieldBoundary({ column, row }) {
    if (
      row >= this.field.length ||
      column >= this.field[row].length ||
      column < 0 ||
      row < 0
    ) {
      throw new Error('out of field bound');
    }
  }

  init() {
    this.field = Array(this.rowCount)
      .fill(0)
      .map((_, row) =>
        Array(this.columnCount)
          .fill(0)
          .map((_, column) => new this.CellClass({ row, column }))
      );
  }

  clickCell({ column, row }) {
    throw new Error('"clickCell" not implement');
  }

  activate({ column, row }) {
    throw new Error('"activate" not implement');
  }

  deactivate({ column, row }) {
    throw new Error('"deactivate" not implement');
  }

  render(parentElement) {
    throw new Error('"render" not implement');
  }
}
