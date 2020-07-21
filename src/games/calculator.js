import gameEngine from './../index.js';

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
  const numForQuestionOne = Math.floor(Math.random() * 21);
  const numForQuestionTwo = Math.floor(Math.random() * 21);
  const methodIndex =
  Math.floor(Math.random() * methodsOfCalc.length);
  const correctAnswer = generateCalculation(methodsOfCalc[methodIndex],
      numForQuestionOne, numForQuestionTwo).toString();
  const question =
  `${numForQuestionOne} ${methodsOfCalc[methodIndex]} ${numForQuestionTwo}`;
  return [question, correctAnswer];
};

const calculateGame = () => gameEngine(gameTask, generateParams);

export default calculateGame;
