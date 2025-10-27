
import './App.css';
import Navbar from './navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the App';
  const visits = 50;
  
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="content">
        <h1>{title}</h1>
        <p>Imaobong visited {visits} times today.</p>
      </div>
    </div>
  );
}

export default App;
