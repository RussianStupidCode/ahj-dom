/* eslint no-restricted-globals: "off" */

export function getRandomInteger(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min));
}

export function getSorted(objectList, attribute) {
  return [...objectList].sort((a, b) => {
    if (!isNaN(Number(a[attribute]))) {
      return a[attribute] - b[attribute];
    }
    return a[attribute] > b[attribute] ? -1 : 1;
  });
}
