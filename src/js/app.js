import GoblinCell from './GoblinCell';
import GoblinGame from './GoblinGame';
import GoblinGameField from './GoblinGameField';
import SimpleFilmList from './SimpleFilmList';
import { getSorted } from './utils';

let currentInterval = null;

const filmAttributes = ['id', 'title', 'year', 'imdb'];
const filmListData = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.3,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.2,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.0,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.0,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.9,
    year: 1994,
  },
];

let currentAttributesIndex = 0;

const stupidRefreshTable = (filmList) => {
  currentAttributesIndex = (currentAttributesIndex + 1) % filmAttributes.length;

  const tableBody = filmList.el.querySelector('tbody');
  const rows = tableBody.querySelectorAll('tr');

  let newFilmListData = [];

  rows.forEach((row) => {
    newFilmListData.push({ ...row.dataset });
  });

  newFilmListData = getSorted(
    newFilmListData,
    filmAttributes[currentAttributesIndex]
  );
  return newFilmListData;
};

const refreshTable = (filmList) => {
  currentAttributesIndex = (currentAttributesIndex + 1) % filmAttributes.length;

  const newFilmListData = getSorted(
    filmList.films,
    filmAttributes[currentAttributesIndex]
  );

  return newFilmListData;
};

function createGoblinControl() {
  const controls = document.querySelector('.controls');
  const taskField = document.querySelector('.task-field');

  const button = document.createElement('button');
  button.classList.add('control');
  button.textContent = 'Убийца гоблинов (#1)';
  controls.insertAdjacentElement('beforeEnd', button);

  button.addEventListener('click', () => {
    taskField.innerHTML = '';

    const gameField = new GoblinGameField(4, 4, GoblinCell);

    const game = new GoblinGame(gameField);

    game.start();
  });
}

function crateFilmTableControl(refreshTableCallback, taskNumber) {
  const controls = document.querySelector('.controls');
  const taskField = document.querySelector('.task-field');

  const button = document.createElement('button');
  button.classList.add('control');
  button.textContent = `Таблица фильмов (#${taskNumber})`;
  controls.insertAdjacentElement('beforeEnd', button);

  button.addEventListener('click', () => {
    clearInterval(currentInterval);

    taskField.innerHTML = '';
    currentAttributesIndex = 0;

    const sortedFilmListData = getSorted(
      filmListData,
      filmAttributes[currentAttributesIndex]
    );

    const filmList = new SimpleFilmList(
      sortedFilmListData,
      filmAttributes,
      filmAttributes[currentAttributesIndex]
    );

    filmList.render(taskField);

    currentInterval = setInterval(() => {
      const newFilmListData = refreshTableCallback(filmList);
      filmList.recreateTable(
        newFilmListData,
        filmAttributes[currentAttributesIndex]
      );
    }, 2000);
  });
}

function main() {
  createGoblinControl();
  crateFilmTableControl(stupidRefreshTable, 2);
  crateFilmTableControl(refreshTable, 3);
}

main();
