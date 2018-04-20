import { getRandomNumber } from '..';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomNumber(0, 3)];
};

const calcResultOfMathOperation = (leftOperand, rightOperand, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = leftOperand + rightOperand;
      break;
    case '-':
      result = leftOperand - rightOperand;
      break;
    case '*':
      result = leftOperand * rightOperand;
      break;
    default:
      break;
  }
  return result;
};

const gameProcess = () => {
  const leftOperand = getRandomNumber(1, 10);
  const rightOperand = getRandomNumber(1, 10);
  const operation = getRandomOperation();

  const question = `${leftOperand} ${operation} ${rightOperand}`;
  const correctAnswer = `${calcResultOfMathOperation(leftOperand, rightOperand, operation)}`;

  return {
    question,
    correctAnswer,
  };
};

export default gameProcess;

