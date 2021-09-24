// const games = ['God of War', 'Skyrim', 'The Elder Scrolls'];
// const newGames = ['Rainbow Six', 'Free Fire', 'Valorant'];
// const player = {
//   name: 'Adson',
//   PC: 'Acer',
//   favoriteGames: games,
//   allGamesHePlays: [...newGames, 'League of Legends'],
// }

// let allGames = [...games, ...newGames];

// console.log(player);

// let fruits = [];
// let additionalItems = [];
// let fruitSalad = [];

// const makeSalad = (fruit, additional) => {
//   fruits.push(fruit);
//   additionalItems.push(additional);
//   return fruitSalad = [...fruits, ...additionalItems]
// }

// console.log(makeSalad('Uva', 'Leite Ninho'));
// console.log(makeSalad('Morango', 'Chocolate'));
// console.log(makeSalad('Banana', 'Nutella'));

// const soma = (...args) => args.reduce((acc, crr) => crr + acc, 0)
// console.log(soma(5, 2, 5, 7, 6, 9));

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const { price: preço, seller, name } = product;
// console.log(preço);
// console.log(seller);
// console.log(name);
// console.log(product);

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const printProductDetails = ({ name, price, seller }) => {
//   console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
// };

// printProductDetails(product);

// const saudacoes = ['Olá', (saudacao) => saudacao];

// // Produza o mesmo resultado acima, porém utilizando array destructuring

// const [fistGreeting, functionGreeting] = saudacoes;
// console.log(functionGreeting(fistGreeting));

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// console.log([comida, animal, bebida] = [bebida, comida, animal]);

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// [, , , ...numerosPares] = numerosPares;

// console.log(numerosPares);

// const getNationality = ({ firstName, nationality = 'Brazilian' }) => {
//   return `${firstName} is ${nationality}`;
// }

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude
// });

// console.log(getPosition(-19.8157, -43.9542));

const greeting = (user = 'Adson') => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

