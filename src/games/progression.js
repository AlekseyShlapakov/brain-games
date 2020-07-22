import gameEngine from './../index.js';
import {generateRandomNum} from './../index.js';

const calcProgression = (stepOfProgression, unknownElem, number) => {
  const progression = [number];
  for (let i = 0; i < 9; i += 1) {
    if (progression[0] > 0) {
      progression.push(progression[i] + stepOfProgression);
    }
  }
  progression.splice(unknownElem, 1, '..');
  return progression;
};

const findElemOfProgression = (stepOfProgression, unknownElem, number) => {
  const progression = calcProgression(stepOfProgression, unknownElem, number);
  for (let i = 0; i < progression.length; i += 1) {
    if (
      progression[i] === '..' &&
      progression[0] !== '..' &&
      progression[progression.length - 1] !== '..'
    ) {
      const elemOfProgression = (parseInt(progression[i - 1]) +
        parseInt(progression[i + 1])) / 2;
      return elemOfProgression;
    } else if (progression[0] === '..') {
      const elemOfProgression =
        parseInt(progression[1]) - (parseInt(progression[2]) -
        parseInt(progression[1]));
      return elemOfProgression;
    } else if (progression[progression.length - 1] === '..') {
      const elemOfProgression =
        parseInt(progression[progression.length - 2]) +
        (parseInt(progression[2]) - parseInt(progression[1]));
      return elemOfProgression;
    }
  }
};

const gameTask = 'What number is missing in the progression?';

const generateParams = () => {
  const stepOfProgression = generateRandomNum(1, 10);
  const unknownElemOfProgression = generateRandomNum(1, 10);
  const numberOfProgression = generateRandomNum(1, 101);
  const correctAnswer =
  findElemOfProgression(stepOfProgression, unknownElemOfProgression,
      numberOfProgression).toString();
  const question =
  calcProgression(stepOfProgression, unknownElemOfProgression,
      numberOfProgression).join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => gameEngine(gameTask, generateParams);

export default progressionGame;


