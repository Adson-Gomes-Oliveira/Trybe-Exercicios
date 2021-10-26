function IMC (weight, height) {
  if (!weight) {
    throw new Error ('Forneça informações de peso e altura');
  };

  height = height / 100;
  const imc = weight / (height * height);
  return `Seu IMC é: ${imc}`;
};

module.exports = IMC;