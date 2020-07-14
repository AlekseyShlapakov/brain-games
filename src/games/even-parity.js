import engineGame from './../index.js';

const isUserAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const isNumberEven = () => {
  const num1 = Math.floor(Math.random() * 21);
  const num2 = Math.floor(Math.random() * 21);
  const num3 = Math.floor(Math.random() * 21);

  const arr = [num1, num2, num3];
  engineGame('Answer "yes" if the number is even, otherwise answer "no".',
      arr, isUserAnswer, '', '');
};


// const isNumberEven = () => {
//   console.log('Welcome to the Brain Games!');
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);

//   console.log('Answer "yes" if the number is even, otherwise answer "no".');

//   const num1 = Math.floor(Math.random() * 21);
//   const num2 = Math.floor(Math.random() * 21);
//   const num3 = Math.floor(Math.random() * 21);

//   const arr = [num1, num2, num3];
//   for (let i = 0; i < arr.length;) {
//     const userAnswer =
//   readlineSync.question(`Question: ${arr[i]}\nYour answer: `);

//     if (isUserAnswer(arr[i]) === userAnswer) {
//       console.log('Correct!');
//       i += 1;
//     } else {
//       console.log(`${userAnswer} is wrong answer ;(. Correct answer was
//                    ${isUserAnswer(arr[i])}. Let's try again, ${userName}!`);
//     }
//   };
//   console.log(`Congratulations, ${userName}!`);
// };

export default isNumberEven;
