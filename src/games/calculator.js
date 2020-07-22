import gameEngine from './../index.js';
import {generateRandomNum} from './../index.js';

const generateCalculation = (metodOfCalc, num1, num2) => {
  if (metodOfCalc === '+') {
    return num1 + num2;
  } else if (metodOfCalc === '-') {
    return num1 - num2;
  } else if (metodOfCalc === '*') {
    return num1 * num2;
  }
};

const gameTask = 'What is the result of the expression?';

const methodsOfCalc = ['+', '-', '*'];

const generateParams = () => {
  const numForQuestionOne = generateRandomNum(1, 21);
  const numForQuestionTwo = generateRandomNum(1, 21);
  const methodIndex = generateRandomNum(1, methodsOfCalc.length);
  const correctAnswer = generateCalculation(methodsOfCalc[methodIndex],
      numForQuestionOne, numForQuestionTwo).toString();
  const question =
  `${numForQuestionOne} ${methodsOfCalc[methodIndex]} ${numForQuestionTwo}`;
  return [question, correctAnswer];
};

const calculateGame = () => gameEngine(gameTask, generateParams);

export default calculateGame;
