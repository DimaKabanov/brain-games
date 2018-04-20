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
        break;
      case '-':
        return leftOperand - rightOperand;
        break;
      case '*':
        return leftOperand * rightOperand;
        break;
      default:
        break;
    }
  }
  return result;
};

const gameProcess = () => {
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

export default gameProcess;

