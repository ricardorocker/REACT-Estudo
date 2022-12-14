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
  const guessesQuantity = 3;
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState();
  const [pickedCategory, setPickedCategory] = useState();
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [guesses, setGuesses] = useState(guessesQuantity);
  const [wrongLetters, setWrongLetters] = useState([]);

  const pickWordAndCategory = useCallback(() => {
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
  }, [words]);

  // Necessário usar useCallback pois essa função é uma dependencia do useEffect
  const startGame = useCallback(() => {
    // Clear all letters
    clearLetterState();

    //  Pick word and pick a category
    const { word, category } = pickWordAndCategory();

    // Create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    // Fill states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // Check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // Push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])
      setGuesses((guesses) => (guesses - 1));
    }
  };

  const clearLetterState = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  // Check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      // Reset all stages
      clearLetterState();

      setGameStage(stages[2].name)
    }
  }, [guesses]);

  const retry = () => {
    setGuesses(guessesQuantity);
    
    setScore(0);

    setGameStage(stages[0].name);
  };

  // Check win conditions
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // win condition
    if (guessedLetters.length === uniqueLetters.length && uniqueLetters.length && stages[1].name) {
      // add score
      setScore((actualScore) => (actualScore += 100));

      // restart game with new word
      startGame();
    }

  }, [guessedLetters, letters, startGame]);

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' &&
        <Game verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          score={score}
          guesses={guesses}
          wrongLetters={wrongLetters} />}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
