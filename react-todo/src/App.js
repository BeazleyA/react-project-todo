import logo from './logo.svg';
import './App.css';
import {Data} from './components/list.js';

function App() {
  return (
    <div className="App">
        <h1>
          To Do List:
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
       <div> <Data/> </div>
    </div>
  );
}

export default App;
