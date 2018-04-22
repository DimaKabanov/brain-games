import runGameEngine from '../game-engine';
import { getRandomNumber, isEvenNumber } from '../numbers';

const task = 'Answer "yes" if number even otherwise answer "no".';

const generateInformationForEvenGame = () => {
  const questionData = getRandomNumber(1, 100);
  const correctAnswer = isEvenNumber(questionData) ? 'yes' : 'no';

  return {
    questionData,
    correctAnswer,
  };
};

const runEven = () => {
  runGameEngine(task, generateInformationForEvenGame);
};

export default runEven;

