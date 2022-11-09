// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// data
import { wordsList } from './data/words'

// components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  // console.log(words);

  const [pickedWord, setPickedWord] = useState();
  const [pickedCategory, setPickedCategory] = useState();
  const [letters, setLetters] = useState();

  console.log("Categoria é: ", pickedCategory);
  console.log("Palavra é: ", pickedWord);
  console.log("Letras são: ", letters);

  const pickWordAndCategory = () => {
    // Pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    // Pick a random word
    /* Jeito que tentei antes
    const categoryLength = Math.floor(Math.random() * words[category].length);
    words[category].filter((palavra, index) => {
      if (index === categoryLength) {
        return setPickedWord(palavra);
      }});
    Jeito do professor */
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word };
  }

  const startGame = () => {
    //  Pick word and pick a category
    const { word, category } = pickWordAndCategory();

    // Create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    // Fill states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' &&
        <Game verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
