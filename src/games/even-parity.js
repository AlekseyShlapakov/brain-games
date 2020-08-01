import runGameEngine from '../index.js';
import generateRandomNum from '../utils.js';

const isEven = (number) => number % 2 === 0;

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateParams = () => {
  const question = generateRandomNum(1, 21);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenParityGame = () => runGameEngine(gameTask, generateParams);

export default runEvenParityGame;
