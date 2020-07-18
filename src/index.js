import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const engineGame = (gameTask, generateParams) => {
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
      if (i >= 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was
                   ${correctAnswer}. Let's try again, ${userName}!`);
      break;
    }
  };
};

export default engineGame;
