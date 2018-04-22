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

  const iter = (divider) => {
    if (divider > Math.sqrt(number)) {
      return true;
    }

    if (number % divider === 0) {
      return false;
    }

    return iter(divider + 1);
  };

  return iter(2);
};

export const getRandomArrNumbers = (amount, start, end) => {
  const iter = (acc) => {
    if (acc.length > amount - 1) {
      return acc;
    }

    const randomNumber = getRandomNumber(start, end);
    return iter(acc.includes(randomNumber) ? acc : acc.concat(randomNumber));
  };

  return iter([]);
};
