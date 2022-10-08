import logo from './logo.svg';
import Navbar from './components/navbar';
import Hero from './components/hero'
import Card from './components/card'
import Joke from './components/jokes';
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navbar />
      <Hero />
      <Joke />
    </div>
  );
}

export default App;
