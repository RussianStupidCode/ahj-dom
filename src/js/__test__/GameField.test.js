import GameField from '../core/GameField';

class MockCell {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }
}

const GAME_FIELD_CREATE_TEST = [
  {
    args: {
      row: 2,
      column: 1,
      CellClass: MockCell,
    },
    expected: {
      field: [
        [new MockCell({ row: 0, column: 0 })],
        [new MockCell({ row: 1, column: 0 })],
      ],
      CellClass: MockCell,
      rowCount: 2,
      columnCount: 1,
    },
  },
];

const gameFieldCreateHandler = test.each(GAME_FIELD_CREATE_TEST);

gameFieldCreateHandler('game field create', ({ args, expected }) => {
  const field = new GameField(args.row, args.column, args.CellClass);

  expect(field).toEqual(expected);
});
