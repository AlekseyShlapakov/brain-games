import engineGame from './../index.js';

const generateNod = (num1, num2) => {
  while (num1 != 0 && num2 != 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }
  return num1 + num2;
};

const gameTask = 'Find the greatest common divisor of given numbers.';

const generateParams = () => {
  const numForQuestionOne = Math.floor(Math.random() * 21);
  const numForQuestionTwo = Math.floor(Math.random() * 21);
  const correctAnswer =
  generateNod(numForQuestionOne, numForQuestionTwo).toString();
  const question = `${numForQuestionOne} ${numForQuestionTwo}`;
  return [question, correctAnswer];
};

const nodGame = () => engineGame(gameTask, generateParams);

export default nodGame;
