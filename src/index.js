import readlineSync from 'readline-sync';

export const getNameOfPlayer = () => readlineSync.question('May I have your name? ');

export const sayPlayerHi = (userName) => {
  console.log(`Hi ${userName}!`);
};
