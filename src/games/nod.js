import runGameEngine from '../index.js';
import generateRandomNum from '../utils.js';

const generateNod = (num1, num2) => (num2 ? generateNod(num2, num1 % num2) : num1);

const gameTask = 'Find the greatest common divisor of given numbers.';

const generateParams = () => {
  const numForQuestionOne = generateRandomNum(1, 21);
  const numForQuestionTwo = generateRandomNum(1, 21);
  const correctAnswer = generateNod(numForQuestionOne, numForQuestionTwo).toString();
  const question = `${numForQuestionOne} ${numForQuestionTwo}`;
  return [question, correctAnswer];
};

const runNodGame = () => runGameEngine(gameTask, generateParams);

export default runNodGame;
