import gameEngine from './../index.js';

const calcProgression = (difference, number) => {
  const progression = [number];
  for (let i = 0; i < 9; i += 1) {
    if (progression[0]) {
      progression.push(progression[i] + difference);
    }
  }
  progression.splice(difference, 1, '..');
  return progression.join(' ');
};

const finfElemOfProgression = (difference, number) => {
  const progression = calcProgression(difference, number);
  const array = progression.split(' ');
  for (let i = 0; i < array.length; i += 1) {
    if (
      array[i] === '..' &&
      array[0] !== '..' &&
      array[array.length - 1] !== '..'
    ) {
      const elemOfProgression = (parseInt(array[i - 1]) +
        parseInt(array[i + 1])) / 2;
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

const gameTask = 'What number is missing in the progression?';

const generateParams = () => {
  const stepOfProgression = Math.floor(Math.random() * 10);
  const numberOfProgression = Math.floor(Math.random() * 101);
  const correctAnswer =
  finfElemOfProgression(stepOfProgression, numberOfProgression).toString();
  const question = calcProgression(stepOfProgression, numberOfProgression);
  return [question, correctAnswer];
};

const progressionGame = () => gameEngine(gameTask, generateParams);

export default progressionGame;


