import readlineSync from 'readline-sync';
import * as engine from './../index.js';

const correctAnswer = (number) => {
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

const primeNumberGame = () => {
  engine.greeting();
  const userName = readlineSync.question('May I have your name? ');
  engine.greetingUserName(userName);

  const question =
  'Answer "yes" if given number is prime. Otherwise answer "no"';
  engine.questionFunc(question);

  for (let i = 0; i < 3;) {
    const num = Math.floor(Math.random() * 21);
    const userAnswer =
  readlineSync.question(`Question: ${num}\nYour answer: `);

    if (correctAnswer(num) === userAnswer) {
      engine.correct();
      i += 1;

      if (i >= 3) {
        engine.congratulation(userName);
      }
    } else {
      engine.ifWrongAnswer(correctAnswer(num), userName, userAnswer);
      break;
    }
  };
};

// const primeNumberGame = () => {
//   console.log('Welcome to the Brain Games!');
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);

//   console.log
//   ('Answer "yes" if given number is prime. Otherwise answer "no"');


//   for (let i = 0; i < 3;) {
//     const num = Math.floor(Math.random() * 21);
//     const userAnswer =
//   readlineSync.question(`Question: ${num}\nYour answer: `);

//     if (correctAnswer(num) === userAnswer) {
//       console.log('Correct!');
//       i += 1;

//       if (i >= 3) {
//         console.log(`Congratulations, ${userName}!`);
//       }
//     } else {
//       console.log(`${userAnswer} is wrong answer ;(. Correct answer was
//                    ${correctAnswer(num)}. Let's try again, ${userName}!`);
//       break;
//     }
//   };
// };

export default primeNumberGame;
