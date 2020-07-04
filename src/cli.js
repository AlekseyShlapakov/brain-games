import readlineSync from 'readline-sync';

const greeting = () => {

    // Wait for user's response.
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
  };
  
  export default greeting;


