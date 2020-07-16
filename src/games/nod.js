import readlineSync from 'readline-sync';
import * as engine from './../index.js';

const correctAnswer = (num1, num2) => {
  while (num1 != 0 && num2 != 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }
  return num1 + num2;
};

const nodGame = () => {
  engine.greeting();
  const userName = readlineSync.question('May I have your name? ');
  engine.greetingUserName(userName);

  const question = 'Find the greatest common divisor of given numbers.';
  engine.questionFunc(question);

  for (let i = 0; i < 3;) {
    const num1 = Math.floor(Math.random() * 21);
    const num2 = Math.floor(Math.random() * 21);
    const userAnswer =
  readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);

    if (correctAnswer(num1, num2) === parseInt(userAnswer)) {
      engine.correct();
      i += 1;

      if (i >= 3) {
        engine.congratulation(userName);
      }
    } else {
      engine.ifWrongAnswer(correctAnswer(num1, num2),
          userName, userAnswer);
      break;
    }
  };
};

// const nodGame = () => {
//   console.log('Welcome to the Brain Games!');

//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);

//   console.log('Find the greatest common divisor of given numbers.');

//   for (let i = 0; i < 3;) {
//     const num1 = Math.floor(Math.random() * 21);
//     const num2 = Math.floor(Math.random() * 21);
//     const userAnswer =
//     readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);
//     if (calcNod(num1, num2) === parseInt(userAnswer)) {
//       console.log('Correct!');
//       i += 1;
//       if (i >= 3) {
//         console.log(`Congratulations, ${userName}!`);
//       }
//     } else {
//       console.log(`${userAnswer} is wrong answer ;(. Correct answer was
//         ${calcNod(num1, num2)}. Let's try again, ${userName}!`);
//       break;
//     }
//   };
// };

export default nodGame;
