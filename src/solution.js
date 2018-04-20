import { getNameOfPlayer, sayPlayerHi, askQuestionToPlayer, getAnswerOfPlayer } from '.';

const game = (gameProcess) => {
  const playersName = getNameOfPlayer();
  sayPlayerHi(playersName);
  const maxCountAttempts = 3;

  const iter = (countAttempts) => {
    if (countAttempts > maxCountAttempts) {
      return 'Congratulations';
    }

    const { question, correctAnswer } = gameProcess();
    askQuestionToPlayer(question);
    const playersAnswer = getAnswerOfPlayer();

    if (playersAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return `'${playersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${playersName}!`;
    }

    return iter(countAttempts + 1);
  };

  console.log(iter(1));
};

export default game;
