import { sayPlayerWelcome, sayPlayerTask, getNameOfPlayer, sayPlayerHi, askQuestionToPlayer, getAnswerOfPlayer } from '.';

const runGameEngine = (task, getInformation) => {
  sayPlayerWelcome();
  sayPlayerTask(task);
  const playersName = getNameOfPlayer();
  sayPlayerHi(playersName);

  const maxCountAttempts = 3;

  const iter = (countAttempts) => {
    if (countAttempts > maxCountAttempts) {
      return 'Congratulations';
    }

    const { question, correctAnswer } = getInformation();
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

export default runGameEngine;
