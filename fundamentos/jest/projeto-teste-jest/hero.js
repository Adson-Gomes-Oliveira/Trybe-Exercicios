const fetch = require('node-fetch');

const getSuperHero = () => {
  const result = fetch('https://www.urlalterada.com') 
    .then((response) => response.json())
    .then((hero) => hero.name)
    .catch(() => 'erro');
  return result;
};

getSuperHero() // Wonder Woman

module.exports = getSuperHero;