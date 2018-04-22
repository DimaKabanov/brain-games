import runGameEngine from '../game-engine';
import { getRandomNumber, isPrimeNumber } from '../numbers';

const task = 'Answer "yes" if number prime otherwise answer "no".';
const questionText = 'Is this number prime?';

const generateInformationForPrimeGame = () => {
  const questionData = getRandomNumber(1, 100);
  const correctAnswer = isPrimeNumber(questionData) ? 'yes' : 'no';

  return {
    questionText,
    questionData,
    correctAnswer,
  };
};

const runPrime = () => {
  runGameEngine(task, generateInformationForPrimeGame);
};

export default runPrime;

