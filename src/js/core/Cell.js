/* eslint class-methods-use-this: "off" */
/* eslint no-unused-vars: "off" */

import CELL_STATES from './cell_state';

export default class Cell {
  constructor({ row, column }, state = CELL_STATES.close) {
    this.row = row;
    this.column = column;
    this.state = state;
  }

  changeState(newState) {
    this.state = newState;
  }

  activate() {
    throw new Error('"activate" not implement');
  }

  deactivate() {
    throw new Error('"deactivate" not implement');
  }

  click() {
    throw new Error('"click" not implement');
  }

  render(parentElement) {
    throw new Error('"render" not implement');
  }
}
