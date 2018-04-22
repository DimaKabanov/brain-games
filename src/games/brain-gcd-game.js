import runGameEngine from '../game-engine';
import { getRandomNumber } from '../numbers';

const FindGreatestCommonDivisor = (numberOne, numberTwo) => {
  const iter = (acc) => {
    if (numberOne % acc === 0 && numberTwo % acc === 0) {
      return acc;
    }

    return iter(acc - 1);
  };

  const largestNumber = numberOne >= numberTwo ? numberOne : numberTwo;
  return iter(largestNumber);
};

const task = 'Find the greatest common divisor of given numbers.';

const generateInformationForGcdGame = () => {
  const numberOne = getRandomNumber(1, 20);
  const numberTwo = getRandomNumber(1, 20);

  const questionData = `${numberOne} ${numberTwo}`;
  const correctAnswer = `${FindGreatestCommonDivisor(numberOne, numberTwo)}`;

  return {
    questionData,
    correctAnswer,
  };
};

const runGcd = () => {
  runGameEngine(task, generateInformationForGcdGame);
};

export default runGcd;
