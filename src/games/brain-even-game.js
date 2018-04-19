import { getNameOfPlayer, sayPlayerHi, askQuestionToPlayer, getAnswerOfPlayer } from '..';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const isEvenNumber = number => number % 2 === 0;

const game = () => {
  const playersName = getNameOfPlayer();
  sayPlayerHi(playersName);

  const startAttempt = 1;
  const maxCountAttempts = 3;

  const iter = (countAttempts) => {
    if (countAttempts > maxCountAttempts) {
      return 'Congratulations';
    }

    const randomNumber = getRandomNumber(1, 100);
    askQuestionToPlayer(randomNumber);
    const playersAnswer = getAnswerOfPlayer();
    const correctAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';

    if (playersAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return `'${playersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${playersName}!`;
    }

    return iter(countAttempts + 1);
  };

  console.log(iter(startAttempt));
};

export default game;

