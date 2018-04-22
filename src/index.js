import readlineSync from 'readline-sync';

export const getNameOfPlayer = () => readlineSync.question('May I have your name? ');

export const sayPlayerWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const sayPlayerTask = (task) => {
  console.log(task);
};

export const sayPlayerHi = (userName) => {
  console.log(`Hi ${userName}!`);
};

export const askQuestionToPlayer = (text = 'Question:', data) => {
  console.log(`${text} ${data}`);
};

export const getAnswerOfPlayer = () => readlineSync.question('Your answer: ');

