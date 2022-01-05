import logo from './logo.svg';
import './App.css';
import Calculadora from './Calculadora';

function App() {
  const numbers = [5, 65, 58, 63, 41, 58, 32, 57, 14, 69];
  let control = 0;
  const operating = numbers.map((num, index) => {
    const list = (<li key={`Alias${index.toString()}`}><Calculadora number1={num} number2={control} repeat={index} /></li>);
    control = num;
    return list;
  })
  return (
    <>
      <h1>Lista de Operações</h1>
      <ul>
        {operating}
      </ul>
    </>
  );
}

export default App;
