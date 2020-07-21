import readlineSync from 'readline-sync';

const numberOfRounds = 3;

export const generateRandomNum = (count) => {
  return Math.floor(Math.random() * count);
};

const gameEngine = (gameTask, generateParams) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameTask);

  for (let i = 0; i < numberOfRounds;) {
    const [question, correctAnswer] = generateParams();
    const userAnswer =
  readlineSync.question(`Question: ${question}\nYour answer: `);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i >= numberOfRounds) {
      console.log(`Congratulations, ${userName}!`);
    }
  };
};

export default gameEngine;
