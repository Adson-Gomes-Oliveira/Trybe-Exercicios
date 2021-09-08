const waking = () => 'Acordando !!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => callback();

console.log(doingThings(sleep));
