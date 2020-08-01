import runGameEngine from '../index.js';
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
  const hiddenIndex = generateRandomNum(0, progressionLength - 1);
  const firstElemOfProgression = generateRandomNum(1, 101);
  const progression = generateProgression(stepOfProgression, firstElemOfProgression,
    progressionLength);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => runGameEngine(gameTask, generateParams);

export default runProgressionGame;
