import runGameEngine from '../index.js';
import generateRandomNum from '../utils.js';

const calculate = (metodOfCalc, num1, num2) => {
  switch (metodOfCalc) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      throw (new Error('Error. Invalid operation!'));
  }
};

const gameTask = 'What is the result of the expression?';

const methodsOfCalc = ['+', '-', '*'];

const generateQuestionAndAnswer = () => {
  const numForQuestionOne = generateRandomNum(1, 21);
  const numForQuestionTwo = generateRandomNum(1, 21);
  const methodIndex = generateRandomNum(0, methodsOfCalc.length - 1);
  const correctAnswer = calculate(methodsOfCalc[methodIndex],
    numForQuestionOne, numForQuestionTwo).toString();
  const question = `${numForQuestionOne} ${methodsOfCalc[methodIndex]} ${numForQuestionTwo}`;
  return [question, correctAnswer];
};

const runCalculateGame = () => runGameEngine(gameTask, generateQuestionAndAnswer);

export default runCalculateGame;
