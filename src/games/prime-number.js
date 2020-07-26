import gameEngine from '../index.js';
import generateRandomNum from '../utils.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number <= 1 || number % i === 0) return false;
  }
  return true;
};

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const generateParams = () => {
  const question = generateRandomNum(1, 21);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeNumberGame = () => gameEngine(gameTask, generateParams);

export default primeNumberGame;
