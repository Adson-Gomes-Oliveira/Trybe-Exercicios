const Redux = require('redux');

const INITAL_STATE = {
  login: false,
  email: ''
}

const fazerLogin = (email) => ({
  type: 'LOGIN',
  email
})

const reducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin('alguem@gmail.com'));

console.log(store.getState());
