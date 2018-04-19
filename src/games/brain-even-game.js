import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const isEvenNumber = number => number % 2 === 0;
const isSayYes = str => str === 'yes';
const isSayNo = str => str === 'no';

const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
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
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
      }
    }

    if (!isEvenNumber(randomNumber)) {
      if (isSayNo(playerResponse)) {
        console.log('Correct!');
      } else if (isSayYes(playerResponse)) {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
      }
    }

    return iter(countAttempts + 1);
  };

  console.log(iter(startAttempt));
};

export default game;

