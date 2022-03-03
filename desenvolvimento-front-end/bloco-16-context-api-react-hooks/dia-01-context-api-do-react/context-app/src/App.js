import Home from './pages/Home';
import './App.css';
import HeroesProvider from './context/HeroesProvider';

function App() {
  return (
    <HeroesProvider>
      <Home />
    </HeroesProvider>
  );
}

export default App;
