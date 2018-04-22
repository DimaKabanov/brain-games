import runGameEngine from '../game-engine';
import { getRandomNumber, compareNumbers } from '../numbers';

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

const createCorrectAnswer = (progression, lengthAnswer) => {
  const iter = (counter, acc) => {
    if (counter === 0) {
      return acc;
    }
    const randomIndex = getRandomNumber(1, 3);
    const itemProgression = progression[randomIndex];
    const newCounter = acc.includes(itemProgression) ? counter : counter - 1;
    const newAcc = acc.includes(itemProgression) ? acc : acc.concat(itemProgression);
    return iter(newCounter, newAcc);
  };

  return iter(lengthAnswer, []);
};

const hideItemsProgression = (progression, hiddenItems) => progression.map(item => (hiddenItems.includes(item) ? '..' : item));

const task = 'What number is missing in this progression?';

const createInformationForProgressionGame = () => {
  const startNumber = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const lengthProgression = 10;
  const lengthAnswer = getRandomNumber(1, 3);
  const currentProgression = createProgression(startNumber, step, lengthProgression);
  const currentCorrectAnswer = createCorrectAnswer(currentProgression, lengthAnswer);

  const questionData = hideItemsProgression(currentProgression, currentCorrectAnswer).join(' ');
  const correctAnswer = currentCorrectAnswer.sort(compareNumbers).join(' ');

  return {
    questionData,
    correctAnswer,
  };
};

const runProgression = () => {
  runGameEngine(task, createInformationForProgressionGame);
};

export default runProgression;
