import runGameEngine from '../index.js';
import generateRandomNum from '../utils.js';

const generateGcd = (num1, num2) => (num2 ? generateGcd(num2, num1 % num2) : num1);

const gameTask = 'Find the greatest common divisor of given numbers.';

const generateQuestionAndAnswer = () => {
  const numForQuestionOne = generateRandomNum(1, 21);
  const numForQuestionTwo = generateRandomNum(1, 21);
  const correctAnswer = generateGcd(numForQuestionOne, numForQuestionTwo).toString();
  const question = `${numForQuestionOne} ${numForQuestionTwo}`;
  return [question, correctAnswer];
};

const runGcdGame = () => runGameEngine(gameTask, generateQuestionAndAnswer);

export default runGcdGame;
