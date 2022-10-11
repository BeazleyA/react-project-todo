import logo from './logo.svg';
import './App.css';
import {Data} from './Components/list.js';

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
      {/* <p> <ComplexList/> </p> */}
       <p> <Data/> </p>
    </div>
  );
}

export default App;
