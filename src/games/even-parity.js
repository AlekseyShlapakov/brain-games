import gameEngine from '../index.js';
import generateRandomNum from '../utils.js';

const isEven = (number) => {
  if (number % 2 === 0) return false;
  return true;
};

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateParams = () => {
  const question = generateRandomNum(1, 21);
  const correctAnswer = isEven(question) ? 'no' : 'yes';
  return [question, correctAnswer];
};

const evenParityGame = () => gameEngine(gameTask, generateParams);

export default evenParityGame;
