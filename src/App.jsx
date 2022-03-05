import './App.css';
import Prompts from './components/prompts';
import Fields from './components/fields';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Prompts/>
      <Fields/>
    </div>
  );
}

export default App;
