const videos = [
  { name: 'Asus', model: 'Xmt-30', serialNumber: 0000001, U$price: 700 },
  { name: 'Acer', model: 'Live Dragon', serialNumber: 0000002, U$price: 900 },
  { name: 'Nvidia', model: 'Geforce 4500 TI', serialNumber: 0000003, U$price: 400 },
  { name: 'AMD', model: 'Ryzen 5700 G1', serialNumber: 0000004, U$price: 1200 },
]
let videosR$;
let teste = [10, 20, 30, 40];

videos.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
const showVideos = (videoArr) => videoArr.forEach((videoChip) => console.table(videoChip));
const findModel = (videoArr, modelName) => videoArr.find((models) => modelName === models.model);
const findLabel = (videoArr, labelName) => videoArr.find((names) => labelName === names.name);
const verifyOverPrice = (videoArr, unitPrice) => videoArr.some((prices) => unitPrice <= prices.U$price);
const verifyOverPrices = (videoArr, unitPrices) => videoArr.every((prices) => unitPrices <= prices.U$price);
const adjustPrice = (videoArr, cutPrice) => videoArr.filter((priceVerified) => cutPrice < priceVerified.U$price);
const convertToReais = (videoArr) => videosR$ = videoArr.map((priceToConvert) => {
  let originalPrice = priceToConvert.U$price;
  return originalPrice * 5;
})
const newArrayOfVideos = (firstArr, secondArr) => firstArr.map((videoChipset, indexOfVideos) => {
  videoChipset.R$price = secondArr[indexOfVideos];
  return videoChipset;
});


// showVideos(videos);
console.log(`
Procurando a marca que tenha a placa de video Live Dragon: 

---------------------------------------------------`);
console.table(findModel(videos, 'Live Dragon'));
console.log(`
Procurando a marca de nome AMD: 

---------------------------------------------------`);
console.table(findLabel(videos, 'AMD'));
console.log(`
Testando se existe alguma placa de video mais cara que U$ 1300: 

---------------------------------------------------`);
console.log(verifyOverPrice(videos, 1300));
console.log(`
Testando se todas as placas são mais caras que U$ 300: 

---------------------------------------------------`);
console.log(verifyOverPrices(videos, 300));
console.log(`
Retornando placas que sejam mais caras que U$ 800: 

---------------------------------------------------`);
console.table(adjustPrice(videos, 800));
console.log(`
Adicionando o preço das placas em Reais: 

---------------------------------------------------`);
console.table(convertToReais(videos));
console.table(newArrayOfVideos(videos, videosR$));