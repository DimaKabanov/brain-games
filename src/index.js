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

export const askQuestionToPlayer = (data) => {
  console.log(`Question: ${data}`);
};

export const getAnswerOfPlayer = () => readlineSync.question('Your answer: ');

