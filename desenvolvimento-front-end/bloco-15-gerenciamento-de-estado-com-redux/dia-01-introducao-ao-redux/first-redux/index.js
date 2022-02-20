const Redux = require('redux');


const INITIAL_STATE = {
  adidas: 0,
  nike: 0,
  puma: 0,
}

const addToProd = (numberToAdd) => {
  return {
    type: 'SHOES_ADD',
    payload: {
      numberToAdd
    }
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOES_ADD':
      return {
        ...state,
        adidas: parseInt(action.payload.numberToAdd + Math.random()),
        nike: action.payload.numberToAdd + 5,
        puma: action.payload.numberToAdd + 7,
      }
  
    default:
      return {
        ...state,
      }
  }
}


// STORE
const store = Redux.createStore(reducer);

const get = store.getState();
const calc = get.adidas + 100;

store.subscribe(() => {
  const counter = store.getState();
  console.log(counter);
});

store.dispatch(addToProd(calc))