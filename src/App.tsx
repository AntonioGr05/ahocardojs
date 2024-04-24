import Welcome from './components/Welcome';
import Hangman from './components/Hangman';

const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 'papaya', 'quince', 'raspberry', 'strawberry', 'tangerine', 'watermelon'];
const animals = ['alligator', 'alpaca', 'ant', 'anteater', 'antelope', 'ape', 'armadillo', 'donkey'];
const countries = ['mexico', 'canada', 'argentina', 'brazil', 'chile', 'colombia', 'peru', 'uruguay', 'venezuela'];
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'black', 'white', 'brown'];
const shapes = ['circle', 'square', 'triangle', 'rectangle', 'pentagon', 'hexagon', 'heptagon'];

const categoryNames = ['words', 'animals', 'countries', 'colors', 'shapes'];
const categories = [words, animals, countries, colors, shapes];
const randomIndex = Math.floor(Math.random() * categories.length);
const randomCategory = categories[randomIndex];
const selectedCategoryName = categoryNames[randomIndex];


function App(){

  return(
    <div className='App'>
      <div className="container">
        <Welcome category = {selectedCategoryName}/>
        <Hangman words = {randomCategory}/>
      </div>
    </div>
  );
};

export default App;