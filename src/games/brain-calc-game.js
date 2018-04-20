import runGameEngine from '../game-engine';
import { sayPlayerWelcome } from '..';
import { getRandomNumber } from '../numbers';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomNumber(0, 3)];
};

const calcResultOperation = (leftOperand, rightOperand) => {
  const result = (operation) => {
    switch (operation) {
      case '+':
        return leftOperand + rightOperand;
      case '-':
        return leftOperand - rightOperand;
      case '*':
        return leftOperand * rightOperand;
      default:
        throw new Error(`Incorrect operation '${operation}'`);
    }
  };
  return result;
};

const generateInformationForCalcGame = () => {
  const leftOperand = getRandomNumber(1, 10);
  const rightOperand = getRandomNumber(1, 10);
  const operation = getRandomOperation();

  const question = `${leftOperand} ${operation} ${rightOperand}`;
  const correctAnswer = `${calcResultOperation(leftOperand, rightOperand)(operation)}`;

  return {
    question,
    correctAnswer,
  };
};

const runCalc = () => {
  sayPlayerWelcome();
  console.log('What is the result of the expression?');
  runGameEngine(generateInformationForCalcGame);
};

export default runCalc;

