import runGameEngine from '../game-engine';
import { getRandomNumber } from '../numbers';

const compareNumbers = (a, b) => {
  if (a < b) {
    return -1;
  }
  return 1;
};

const findeSmallestNumber = arr => Math.min(...arr);
const findeBiggestNumber = arr => Math.max(...arr);

const balanceNumber = (number) => {
  const arrayNumbers = String(number).split('').map(item => Number(item));

  const iter = (acc) => {
    const smallestNumber = findeSmallestNumber(acc);
    const biggestNumber = findeBiggestNumber(acc);

    if (biggestNumber - smallestNumber <= 1) {
      return acc;
    }

    const indexSmallestNumber = acc.findIndex(item => item === smallestNumber);
    const indexBiggestNumber = acc.findIndex(item => item === biggestNumber);

    acc[indexSmallestNumber] = smallestNumber + 1;
    acc[indexBiggestNumber] = biggestNumber - 1;

    return iter(acc);
  };

  return iter(arrayNumbers).sort(compareNumbers).join('');
};

const task = 'Balance the given number.';

const generateInformationForBalanceGame = () => {
  const number = getRandomNumber(1, 9999);

  const question = `${number}`;
  const correctAnswer = balanceNumber(number);

  return {
    question,
    correctAnswer,
  };
};

const runBalance = () => {
  runGameEngine(task, generateInformationForBalanceGame);
};

export default runBalance;