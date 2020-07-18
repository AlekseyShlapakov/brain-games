import engineGame from './../index.js';

const isNumberPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  if (number < 2) {
    return 'no';
  }
  return 'yes';
};

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const generateParams = () => {
  const numForQuestion = Math.floor(Math.random() * 21);
  const correctAnswer = isNumberPrime(numForQuestion);
  const question = numForQuestion;
  return [question, correctAnswer];
};

const primeNumberGame = () => engineGame(gameTask, generateParams);

export default primeNumberGame;


