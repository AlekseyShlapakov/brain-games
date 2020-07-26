import gameEngine from '../index.js';
import generateRandomNum from '../utils.js';

const generateCalculation = (metodOfCalc, num1, num2) => {
  switch (metodOfCalc) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const gameTask = 'What is the result of the expression?';

const methodsOfCalc = ['+', '-', '*'];

const generateParams = () => {
  const numForQuestionOne = generateRandomNum(1, 21);
  const numForQuestionTwo = generateRandomNum(1, 21);
  const methodIndex = generateRandomNum(0, methodsOfCalc.length - 1);
  const correctAnswer = generateCalculation(methodsOfCalc[methodIndex],
    numForQuestionOne, numForQuestionTwo).toString();
  const question = `${numForQuestionOne} ${methodsOfCalc[methodIndex]} ${numForQuestionTwo}`;
  return [question, correctAnswer];
};

const calculateGame = () => gameEngine(gameTask, generateParams);

export default calculateGame;
