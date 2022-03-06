export const SAVE = 'SAVE';

export const saveHero = (hero) => ({
  type: SAVE,
  payload: {
    hero,
  }
});
