export function getRandomInteger(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min));
}

export function getSorted(objectList, attribute) {
  return [...objectList].sort((a, b) => (a[attribute] > b[attribute] ? -1 : 1));
}
