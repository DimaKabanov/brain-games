import readlineSync from 'readline-sync';
import { getNameOfPlayer, sayPlayerHi } from '..';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const isEvenNumber = number => number % 2 === 0;
const isSayYes = str => str === 'yes';
const isSayNo = str => str === 'no';

const game = () => {
  const userName = getNameOfPlayer();
  sayPlayerHi(userName);

  const startAttempt = 1;
  const maxCountAttempts = 3;

  const iter = (countAttempts) => {
    if (countAttempts > maxCountAttempts) {
      return 'Congratulations';
    }

    const randomNumber = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);
    const playerResponse = readlineSync.question('Your answer: ');

    if (!isSayYes(playerResponse) && !isSayNo(playerResponse)) {
      return `Incorrect answer. Let's try again, ${userName}.`;
    }

    if (isEvenNumber(randomNumber)) {
      if (isSayYes(playerResponse)) {
        console.log('Correct!');
      } else if (isSayNo(playerResponse)) {
        return `'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`;
      }
    }

    if (!isEvenNumber(randomNumber)) {
      if (isSayNo(playerResponse)) {
        console.log('Correct!');
      } else if (isSayYes(playerResponse)) {
        return `'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`;
      }
    }

    return iter(countAttempts + 1);
  };

  console.log(iter(startAttempt));
};

export default game;

