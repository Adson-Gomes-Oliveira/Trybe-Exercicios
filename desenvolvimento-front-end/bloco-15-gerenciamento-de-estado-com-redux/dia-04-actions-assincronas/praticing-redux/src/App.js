import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Content from './components/Content';
import store from './store';

function App() {
  return (
  <Provider store={store}>
    <Router>
      <Content />
    </Router>
  </Provider>
    
  );
}

export default App;
