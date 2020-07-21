import gameEngine from './../index.js';
import {generateRandomNum} from './../index.js';

const generateNod = (num1, num2) => {
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
  }
  return num1;
};

const gameTask = 'Find the greatest common divisor of given numbers.';

const generateParams = () => {
  const numForQuestionOne = generateRandomNum(21);
  const numForQuestionTwo = generateRandomNum(21);
  const correctAnswer =
  generateNod(numForQuestionOne, numForQuestionTwo).toString();
  const question = `${numForQuestionOne} ${numForQuestionTwo}`;
  return [question, correctAnswer];
};

const nodGame = () => gameEngine(gameTask, generateParams);

export default nodGame;
