import readlineSync from 'readline-sync';
// import engineGame from './../index.js';

const calcProgression = (num1, num2) => {
  const progression = [num2];
  for (let i = 0; i < 9; i += 1) {
    if (progression[0]) {
      progression.push(progression[i] + num1);
    }
  }
  progression.splice(num1, 1, '..');
  return progression.join(' ');
};

const correctAnswer = (num1, num2) => {
  const progression = calcProgression(num1, num2);
  const array = progression.split(' ');
  for (let i = 0; i < array.length; i += 1) {
    if (
      array[i] === '..' &&
      array[0] !== '..' &&
      array[array.length - 1] !== '..'
    ) {
      const elemOfProgression = (Number(array[i - 1]) +
        Number(array[i + 1])) / 2;
      return elemOfProgression;
    } else if (array[0] === '..') {
      const elemOfProgression =
        parseInt(array[1]) - (parseInt(array[2]) - parseInt(array[1]));
      return elemOfProgression;
    } else if (array[array.length - 1] === '..') {
      const elemOfProgression =
        parseInt(array[array.length - 2]) +
        (parseInt(array[2]) - parseInt(array[1]));
      return elemOfProgression;
    }
  }
};

const progressionGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; ) {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 101);
    const arr = [num1, num2, num1];
    const userAnswer =
    readlineSync.question(`Question: ${calcProgression(num1, num2)}
Your answer: `);
    if (correctAnswer(num1, num2) === parseInt(userAnswer)) {
      console.log('Correct!');
      i += 1;
      if (i >= arr.length) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was
        ${correctAnswer(num1, num2)}. Let's try again, ${userName}!`);
      break;
    }
  }
};

export default progressionGame;
