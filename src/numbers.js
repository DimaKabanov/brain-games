export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const isEvenNumber = number => number % 2 === 0;
export const compareNumbers = (a, b) => {
  if (a < b) {
    return -1;
  }
  return 1;
};
