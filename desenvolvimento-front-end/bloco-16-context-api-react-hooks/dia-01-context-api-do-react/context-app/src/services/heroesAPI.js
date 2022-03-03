const fetchHeroByName = async (heroName) => {
  const key = 'b893abec9163687de400c4e79fdd00f9';
  const hash = 'b7ddca87508be61f2d785c88e8e7bdd9';
  const ts = '1';
  try {
    const responseByName = await fetch(`https://gateway.marvel.com/v1/public/characters?name=${heroName}?ts=${ts}&apikey=${key}&hash=${hash}`);
    const resultByName = await responseByName.json();
    return resultByName;
  } catch (error) {
    console.log(error);
  }
}

export default fetchHeroByName;
