import './App.css';
import './components/button.css';


function App() {
  return (
    <button
    className='button'
    type='button'
    onClick={() => console.log("Bottone Cliccato")}
    children="Cliccami"
    ></button>
  );
}

export default App;
