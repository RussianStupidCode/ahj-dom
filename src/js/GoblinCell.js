import Cell from './core/Cell';
import CELL_STATES from './core/cell_state';
import GOBLIN_IMG from '../img/goblin.png';

export default class GoblinCell extends Cell {
  constructor({ row, column }, state = CELL_STATES.close) {
    super({ row, column }, state);
    this.el = document.createElement('div');
    this.el.dataset.row = row;
    this.el.dataset.column = column;
    this.el.classList.add('cell');
    this.el.innerHTML = `<img src="${GOBLIN_IMG}">`;

    this.deactivate();
  }

  click() {
    if (this.state === CELL_STATES.target) {
      this.deactivate();

      this.el.classList.add('cell-target-defeat');

      setTimeout(() => {
        this.el.classList.remove('cell-target-defeat');
      }, 500);
    }
  }

  deactivate() {
    this.el.classList.remove('cell-target');

    const image = this.el.querySelector('img');
    image.classList.add('hide');

    this.changeState(CELL_STATES.close);
  }

  activate() {
    this.el.classList.add('cell-target');

    const image = this.el.querySelector('img');
    image.classList.remove('hide');

    this.changeState(CELL_STATES.target);
  }

  render(parentElement) {
    parentElement.insertAdjacentElement('beforeEnd', this.el);
  }
}
