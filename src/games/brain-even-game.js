import runGameEngine from '../game-engine';
import { sayPlayerWelcome } from '..';
import { getRandomNumber, isEvenNumber } from '../numbers';

const generateInformationForEvenGame = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

const runEven = () => {
  sayPlayerWelcome();
  console.log('Answer "yes" if number even otherwise answer "no".');
  runGameEngine(generateInformationForEvenGame);
};

export default runEven;

