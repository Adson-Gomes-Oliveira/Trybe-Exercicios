const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointFiles = ['./src/routers/movieRoutes.js'];

swaggerAutogen(outputFile, endpointFiles);
