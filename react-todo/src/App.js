import './App.css';
import TodoList from './components/TodoList';

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
       <div> <TodoList/> </div>
    </div>
  );
}

export default App;
