import React, { useEffect, useState } from 'react';

const INITIAL_SECONDS = 1;
const SECONDS_TO_ADD = 1;
const SECONDS_LIMIT = 10;

function App() {
  const [randomNumber, setNumber] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [att, setAtt] = useState(0);
  const [ second, setSeconds ] = useState(INITIAL_SECONDS);

  useEffect(() => {
      const number = setInterval(() => {
        const number = parseInt((Math.random() * (100 - 0) + 0));
        setNumber(number);
        const verify = number % 3 === 0 || number % 5 === 0;
        verify ? setFeedback('Acertou') : setFeedback('Errou');
        att === 0 ? setAtt(1) : setAtt(0);
      }, 10000);

      return () => {
        clearInterval(number)
      }
  }, [att]);

  useEffect(() => {
    if (second > SECONDS_LIMIT) {
      setSeconds(INITIAL_SECONDS);
    }

    const timer = setInterval(() => {
      setSeconds(second + SECONDS_TO_ADD);
    }, 1000)

    return () => {
      clearInterval(timer);
    }
  }, [second]);

  useEffect(() => {
    const feedback = setInterval(() => {
      setFeedback(true)
    }, 4000);

    return () => {
      clearInterval(feedback);
    }

  }, [feedback])


  return (
    <>
      <span>{ randomNumber }</span><br /><br />
      <span>{ second }</span><br /><br />
      <span>{ feedback ? feedback : null }</span><br />
    </>
  );
}

export default App;
