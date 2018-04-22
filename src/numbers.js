export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const isEvenNumber = number => number % 2 === 0;

export const compareNumbers = (a, b) => {
  if (a < b) {
    return -1;
  }
  return 1;
};

export const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }

  const iter = (devider) => {
    if (devider > Math.sqrt(number)) {
      return true;
    }

    if (number % devider === 0) {
      return false;
    }

    return iter(devider + 1);
  };

  return iter(2);
};
