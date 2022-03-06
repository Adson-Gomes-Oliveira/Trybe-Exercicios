import { SAVE } from "../actions/saveHero";

const INITIAL_STATE = {
  heroSaved: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE:
      return {
        ...state,
        heroSaved: state.heroSaved.concat(action.payload.hero),
      }
  
    default:
      return state
  }
}

export default reducer;
