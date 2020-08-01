import runGameEngine from '../index.js';
import generateRandomNum from '../utils.js';

const isNotEven = (number) => {
  if (number % 2 === 0) return false;
  return true;
};

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateParams = () => {
  const question = generateRandomNum(1, 21);
  const correctAnswer = isNotEven(question) ? 'no' : 'yes';
  return [question, correctAnswer];
};

const runEvenParityGame = () => runGameEngine(gameTask, generateParams);

export default runEvenParityGame;
