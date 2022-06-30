import Cell from '../core/Cell';
import CELL_STATES from '../core/cell_state';

const CREATE_CELL_TEST_DATA = [
  {
    args: {
      position: {
        row: 1,
        column: 1,
      },
    },
    expected: {
      row: 1,
      column: 1,
      state: CELL_STATES.close,
    },
  },

  {
    args: {
      position: {
        row: 4,
        column: 3,
      },
      state: CELL_STATES.target,
    },
    expected: {
      row: 4,
      column: 3,
      state: CELL_STATES.target,
    },
  },
];

const createCellHandler = test.each(CREATE_CELL_TEST_DATA);

createCellHandler('create cell teest', ({ args, expected }) => {
  const cell = new Cell(args.position, args.state);

  expect(cell).toEqual(expected);
});

const CHANGE_CELL_STATE_TEST_DATA = [
  {
    args: {
      cell: {
        position: {
          row: 1,
          column: 1,
        },
        state: CELL_STATES.close,
      },
      newState: CELL_STATES.close,
    },
    expected: CELL_STATES.close,
  },

  {
    args: {
      cell: {
        position: {
          row: 1,
          column: 1,
        },
        state: CELL_STATES.close,
      },
      newState: CELL_STATES.target,
    },
    expected: CELL_STATES.target,
  },
];

const changeCellStateHandler = test.each(CHANGE_CELL_STATE_TEST_DATA);

changeCellStateHandler('change cell test teest', ({ args, expected }) => {
  const cell = new Cell(args.cell.position, args.cell.state);

  cell.changeState(args.newState);

  expect(cell.state).toBe(expected);
});
