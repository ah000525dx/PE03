import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          To do list app
          <div>
            <input type="text" id="left"/>
            <input type="button" id="right" value="Add Task"/>
            <br></br>
            <input type="text" id="left"/>
            <input type="button" id="right" value="Delete Task"/>
            
          </div>
      </header>
     
    </div>
  );
}

export default App;
