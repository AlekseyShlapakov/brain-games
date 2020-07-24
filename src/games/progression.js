import gameEngine from './../index.js';
import {generateRandomNum} from './../index.js';

const calcProgression = (stepOfProgression, number) => {
  const progression = [number];
  for (let i = 0; i < 9; i += 1) {
    if (progression[0] > 0) {
      progression.push(progression[i] + stepOfProgression);
    }
  }
  return progression;
};

const gameTask = 'What number is missing in the progression?';

const generateParams = () => {
  const stepOfProgression = generateRandomNum(1, 10);
  const hiddenIndex = generateRandomNum(0, 9);
  const numberOfProgression = generateRandomNum(1, 101);
  const progression = calcProgression(stepOfProgression, numberOfProgression);
  let hiddenElem = '..';
  [hiddenElem, progression[hiddenIndex]] =
  [progression[hiddenIndex], hiddenElem];
  const correctAnswer = hiddenElem.toString();
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => gameEngine(gameTask, generateParams);

export default progressionGame;


