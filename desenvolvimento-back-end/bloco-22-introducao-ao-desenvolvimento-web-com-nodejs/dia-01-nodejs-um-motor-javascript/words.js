const word = (word) => console.log(`${word} <-- Essa palavra é top`);
const letter = (letter) => {
  for (let i = 0; i < letter.length; i++) {
    console.log(letter[i]);
  };
};

module.exports = {
  word,
  letter
}