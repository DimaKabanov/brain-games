import { getRandomNumber } from '..';

const isEvenNumber = number => number % 2 === 0;

const gameProcess = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export default gameProcess;

