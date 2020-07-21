import gameEngine from './../index.js';
import {generateRandomNum} from './../index.js';


const isNumberEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateParams = () => {
  const question = generateRandomNum(21);
  const correctAnswer = isNumberEven(question);
  return [question, correctAnswer];
};

const evenParityGame = () => gameEngine(gameTask, generateParams);

export default evenParityGame;

