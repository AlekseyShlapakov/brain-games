import readlineSync from 'readline-sync';
// import engineGame from './../index.js';

const numbersCalc = (item, num1, num2) => {
  if (item === '+') {
    return num1 + num2;
  } else if (item === '-') {
    return num1 - num2;
  } else if (item === '*') {
    return num1 * num2;
  }
};

// const calculateGame = () => {
//   const num1 = Math.floor(Math.random() * 21);
//   const num2 = Math.floor(Math.random() * 21);
//   const arr = ['+', '-', '*'];
//   engineGame('What is the result of the expression?',
//       arr, numbersCalc, num1, num2);
// };


const calculateGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');

  const arr = ['+', '-', '*'];
  for (let i = 0; i < arr.length;) {
    const num1 = Math.floor(Math.random() * 21);
    const num2 = Math.floor(Math.random() * 21);
    const userAnswer = readlineSync.question(`Question: ${num1} ${arr[i]} ${num2}\nYour answer: `);
    if (numbersCalc(arr[i], num1, num2) === parseInt(userAnswer)) {
      console.log('Correct!');
      i += 1;
      if (i >= arr.length) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was
        ${numbersCalc(arr[i], num1, num2)}. Let's try again, ${userName}!`);
      break;
    }
  };
};

export default calculateGame;
