import readlineSync from 'readline-sync';

export const isUserAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const isNumberEven = () => {

  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const arr = [15, 6, 7];
  for (let i = 0; i < arr.length;) {
    const userAnswer = readlineSync.question(`Question: ${arr[i]}\nYour answer: `);
    if (isUserAnswer(arr[i]) === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 
                   ${isUserAnswer(arr[i])}. Let's try again, ${userName}!`);
    }
  };
  console.log(`Congratulations, ${userName}!`);
};

export default isNumberEven;