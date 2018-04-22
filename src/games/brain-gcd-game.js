import runGameEngine from '../game-engine';
import { getRandomNumber } from '../numbers';

const FindGreatestCommonDivisor = (numberOne, numberTwo) => {
  if (numberOne === numberTwo) {
    return numberOne;
  }

  const iter = (large, small) => {
    const remainderOfDivision = large % small;

    if (remainderOfDivision === 0) {
      return small;
    }

    return iter(small, remainderOfDivision);
  };

  const largestNumber = Math.max(numberOne, numberTwo);
  const smallestNumber = Math.min(numberOne, numberTwo);
  return iter(largestNumber, smallestNumber);
};

const task = 'Find the greatest common divisor of given numbers.';

const generateInformationForGcdGame = () => {
  const numberOne = getRandomNumber(1, 200);
  const numberTwo = getRandomNumber(1, 200);

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
