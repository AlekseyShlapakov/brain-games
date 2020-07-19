import gameEngine from './../index.js';

const generateCalculation = (item, num1, num2) => {
  if (item === '+') {
    return num1 + num2;
  } else if (item === '-') {
    return num1 - num2;
  } else if (item === '*') {
    return num1 * num2;
  }
};

const gameTask = 'What is the result of the expression?';

const methodsOfCalculation = ['+', '-', '*'];

const generateParams = () => {
  const numForQuestionOne = Math.floor(Math.random() * 21);
  const numForQuestionTwo = Math.floor(Math.random() * 21);
  const methodsOfCalculationIndex =
  Math.floor(Math.random() * methodsOfCalculation.length);
  const correctAnswer =
  generateCalculation(methodsOfCalculation[methodsOfCalculationIndex],
      numForQuestionOne, numForQuestionTwo).toString();
  const question =
  `${numForQuestionOne} ${methodsOfCalculation[methodsOfCalculationIndex]} 
  ${numForQuestionTwo}`;
  return [question, correctAnswer];
};

const calculateGame = () => gameEngine(gameTask, generateParams);

export default calculateGame;
