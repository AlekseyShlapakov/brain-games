import readlineSync from 'readline-sync';
import * as engine from './../index.js';

const correctAnswer = (item, num1, num2) => {
  if (item === '+') {
    return num1 + num2;
  } else if (item === '-') {
    return num1 - num2;
  } else if (item === '*') {
    return num1 * num2;
  }
};

const calculateGame = () => {
  engine.greeting();
  const userName = readlineSync.question('May I have your name? ');
  engine.greetingUserName(userName);

  const question = 'What is the result of the expression?';
  engine.questionFunc(question);

  const arr = ['+', '-', '*'];
  for (let i = 0; i < 3;) {
    const num1 = Math.floor(Math.random() * 21);
    const num2 = Math.floor(Math.random() * 21);
    const userAnswer =
  readlineSync.question(`Question: ${num1} ${arr[i]} ${num2}\nYour answer: `);

    if (correctAnswer(arr[i], num1, num2) === parseInt(userAnswer)) {
      engine.correct();
      i += 1;

      if (i >= 3) {
        engine.congratulation(userName);
      }
    } else {
      engine.ifWrongAnswer(correctAnswer(arr[i], num1, num2),
          userName, userAnswer);
      break;
    }
  };
};


// const calculateGame = () => {
//   console.log('Welcome to the Brain Games!');

//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);

//   console.log('What is the result of the expression?');

//   const arr = ['+', '-', '*'];
//   for (let i = 0; i < 3;) {
//     const num1 = Math.floor(Math.random() * 21);
//     const num2 = Math.floor(Math.random() * 21);
//     const userAnswer =
//     readlineSync.question(`Question: ${num1} ${arr[i]} ${num2}
// Your answer: `);
//     if (numbersCalc(arr[i], num1, num2) === parseInt(userAnswer)) {
//       console.log('Correct!');
//       i += 1;
//       if (i >= 3) {
//         console.log(`Congratulations, ${userName}!`);
//       }
//     } else {
//       console.log(`${userAnswer} is wrong answer ;(. Correct answer was
//         ${numbersCalc(arr[i], num1, num2)}. Let's try again, ${userName}!`);
//       break;
//     }
//   };
// };

export default calculateGame;
