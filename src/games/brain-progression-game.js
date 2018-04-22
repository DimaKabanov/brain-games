import runGameEngine from '../game-engine';
import { getRandomNumber, getRandomArrNumbers } from '../numbers';

const createProgression = (start, step, length) => {
  const iter = (counter, previousNumber, acc) => {
    if (counter === 0) {
      return acc;
    }
    const nextNumber = previousNumber + step;
    return iter(counter - 1, nextNumber, acc.concat(nextNumber));
  };

  return iter(length, start, [start]);
};

const task = 'What number is missing in this progression?';

const createInformationForProgressionGame = () => {
  const startNumber = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const lengthProgression = 10;
  const startIndexToHide = 1;
  const lengthIndexToHide = getRandomNumber(1, 4);

  const currentProgression = createProgression(startNumber, step, lengthProgression);
  const arrIndexHide = getRandomArrNumbers(lengthIndexToHide, startIndexToHide, lengthProgression);

  const filteredAnswer = currentProgression.filter((item, index) => arrIndexHide.includes(index)).join(' ');
  const withHiddenItems = currentProgression.map((item, index) => (arrIndexHide.includes(index) ? '..' : item)).join(' ');

  const questionData = withHiddenItems;
  const correctAnswer = filteredAnswer;

  return {
    questionData,
    correctAnswer,
  };
};

const runProgression = () => {
  runGameEngine(task, createInformationForProgressionGame);
};

export default runProgression;
