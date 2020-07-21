import gameEngine from './../index.js';

const isNumberPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const generateParams = () => {
  const question = Math.floor(Math.random() * 21);
  const correctAnswer = isNumberPrime(question) ? 'yes': 'no';
  return [question, correctAnswer];
};

const primeNumberGame = () => gameEngine(gameTask, generateParams);

export default primeNumberGame;


