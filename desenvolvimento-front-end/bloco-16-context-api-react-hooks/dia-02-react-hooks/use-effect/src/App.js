import React, { useEffect, useState } from 'react';

function App() {
  const [randomNumber, setNumber] = useState(0);
  const [timer, setTimer] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [att, setAtt] = useState(0);

  useEffect(() => {
    async function timer() {
      setTimeout(() => {
        const number = parseInt((Math.random() * (100 - 0) + 0));
        setNumber(number);
        const verify = number % 3 === 0 || number % 5 === 0;
        verify ? setFeedback('Acertou') : setFeedback('Errou');
        att === 0 ? setAtt(1) : setAtt(0);
      }, 6000);
    }
    timer();
  }, [att]);

  useEffect(() => {
    if(feedback) {
      setTimeout(() => {
        setFeedback('')
      }, 4000)
    }
  }, [feedback])

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);
    
  }, [timer]);

  return (
    <>
      <span>{ randomNumber }</span><br /><br />
      <span>{ timer }</span><br /><br />
      <span>{ feedback ? feedback : null }</span><br />
    </>
  );
}

export default App;
