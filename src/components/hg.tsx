import { useState } from "react";
import "../css/main.css"

interface HangmanProps {
    words: string[];
}

const Hangman = ({ words }: HangmanProps) => {
    const [selectedWord, setSelectedWord] = useState(words[0]);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [errorCount, setErrorCount] = useState(0);

    const showGame = () => {
        const container = document.querySelector('.hide');
        //cambiar el display del contenedor a flex
        container?.classList.toggle('show');
    }

    const displayWord = selectedWord.split('').map((letter, index) => {
        console.log("selectedWord", selectedWord);
        if (guessedLetters.includes(letter)) {
            console.log("guessedLetter", guessedLetters);
            return letter;
        } else {
            return "_";
        }
    });

    const handleGuess = (letter: string) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
            if (!selectedWord.includes(letter)) {
                setErrorCount(errorCount + 1);
                console.log("setErrorCount", errorCount);
            }
        }
    };

    const restartGame = () => {
        const newWordIndex = Math.floor(Math.random() * words.length);
        const newWord = words[newWordIndex];
        setSelectedWord(newWord);
        setGuessedLetters([]);
        setErrorCount(0);
    };

    return (
        <div className="container">
            <button onClick={showGame} className="button"> Start game </button>
            <div className="hide">
                <p>{displayWord.join(' ')}</p>
                <input maxLength={1} onChange={(e) => handleGuess(e.target.value)} />
                {(displayWord.join('')=== selectedWord || errorCount > 5) && (
                    <button onClick={() => {
                        restartGame();
                        setSelectedWord(words[Math.floor(Math.random() * words.length)]);
                    }}>Select New Word</button>
                )}
                <p> Cantidad de errores {errorCount}</p>
                {displayWord.join('') === selectedWord && (
                    <p>You won this round!</p>
                )}
            </div>
        </div>
    );
}

export default Hangman;