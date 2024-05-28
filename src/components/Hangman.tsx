import { useState, useEffect  } from "react";
import "../index.css"
import Timer from './Timer';
interface HangmanProps {
    words: string[];
}

const Hangman = ({ words }: HangmanProps) => {
    const [selectedWord, setSelectedWord] = useState(words[0]);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [errorCount, setErrorCount] = useState(0);

    const [startTime, setStartTime] = useState<Date | null>(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [wordGuessed, setWordGuessed] = useState(false);
    const [winCount, setWinCount] = useState(0);
    console.log('palabras', words);

    const showGame = () => {
        const container = document.querySelector('.hide');
        //cambiar el display del contenedor a flex
        container?.classList.toggle('show');
        setGameStarted(true);
    }

    useEffect(() => {
        if (gameStarted && !wordGuessed) {
            setStartTime(new Date());
        }
    }, [gameStarted, wordGuessed]);

    const displayWord = selectedWord.split('').map((letter) => {
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
        setWordGuessed(false);
        setGameStarted(true);
    };

    useEffect(() => {
        if (displayWord.join('') === selectedWord) {
            setWordGuessed(true);
        }else {
            setWordGuessed(false);
        }
    }, [displayWord, selectedWord]);

    return (
        <div className="hg">
            <button onClick={showGame} className="button"> Start game </button>
            <p>Has adivinado la palabra {winCount} veces</p>
            <div className="hide">
                <p>{displayWord.join(' ')}</p>
                <input maxLength={1} onChange={(e) => handleGuess(e.target.value)} className="inputh"/>
                {(displayWord.join('')=== selectedWord || errorCount > 5) && (
                    <button className="button" onClick={() => {
                        restartGame();
                        setSelectedWord(words[Math.floor(Math.random() * words.length)]);
                        if (displayWord.join('') === selectedWord) {
                            setWinCount(winCount + 1);
                        }
                        setWordGuessed(true);
                    }}>Select New Word</button>
                )}
                <p> Cantidad de errores {errorCount}</p>
                {displayWord.join('') === selectedWord && (
                    <>
                        <p>You won this round!</p>
                    </>
                )}
                {gameStarted && !wordGuessed && <Timer startTime={startTime} />}
            </div>
        </div>
    );
}

export default Hangman;