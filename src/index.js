export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const greetingUserName = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const questionFunc = (question) => {
  console.log(question);
};

export const correct = () => {
  console.log('Correct!');
};

export const congratulation = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const ifWrongAnswer = (corAnswerFunc, userName, userAnswer) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was
                 ${corAnswerFunc}. Let's try again, ${userName}!`);
};


