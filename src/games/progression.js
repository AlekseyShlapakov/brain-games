import gameEngine from '../index.js';
import generateRandomNum from '../utils.js';

const generateProgression = (stepOfProgression, firstElem, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstElem + i * stepOfProgression);
  }
  return progression;
};

const gameTask = 'What number is missing in the progression?';

const generateParams = () => {
  const progressionLength = 10;
  const stepOfProgression = generateRandomNum(1, 10);
  const hiddenIndex = generateRandomNum(0, progressionLength);
  const firstElemOfProgression = generateRandomNum(1, 101);
  const progression = generateProgression(stepOfProgression, firstElemOfProgression,
    progressionLength);
  let hiddenElem = '..';
  [hiddenElem, progression[hiddenIndex]] = [progression[hiddenIndex], hiddenElem];
  const correctAnswer = hiddenElem.toString();
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => gameEngine(gameTask, generateParams);

export default progressionGame;
