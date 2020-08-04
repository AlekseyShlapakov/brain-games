import runGameEngine from '../index.js';
import generateRandomNum from '../utils.js';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const generateQuestionAndAnswer = () => {
  const question = generateRandomNum(1, 21);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrimeNumberGame = () => runGameEngine(gameTask, generateQuestionAndAnswer);

export default runPrimeNumberGame;
