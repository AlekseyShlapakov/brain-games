import engineGame from './../index.js';

const generateCalculation = (item, num1, num2) => {
  if (item === '+') {
    return num1 + num2;
  } else if (item === '-') {
    return num1 - num2;
  } else if (item === '*') {
    return num1 * num2;
  }
};

const gameTask = 'What is the result of the expression?';

const methodsOfCalculation = ['+', '-', '*'];

const generateParams = () => {
  const numForQuestionOne = Math.floor(Math.random() * 21);
  const numForQuestionTwo = Math.floor(Math.random() * 21);
  const methodsOfCalculationIndex =
  Math.floor(Math.random() * methodsOfCalculation.length);
  const correctAnswer =
  generateCalculation(methodsOfCalculation[methodsOfCalculationIndex],
      numForQuestionOne, numForQuestionTwo).toString();
  const question =
  `${numForQuestionOne} ${methodsOfCalculation[methodsOfCalculationIndex]} 
  ${numForQuestionTwo}`;
  return [question, correctAnswer];
};

const calculateGame = () => engineGame(gameTask, generateParams);

export default calculateGame;

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
