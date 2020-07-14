import readlineSync from 'readline-sync';

const engineGame = (question, arr, someFunc, n1, n2) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(question);

  for (let i = 0; i < arr.length;) {
    const userAnswer =
    readlineSync.question(`Question: ${n1} ${arr[i]} ${n2}\nYour answer: `);

    if (someFunc(arr[i]) === userAnswer) {
      console.log('Correct!');
      i += 1;

      if (i >= arr.length) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 
                      ${someFunc(arr[i])}. Let's try again, ${userName}!`);
      break;
    }
  };
};
export default engineGame;


