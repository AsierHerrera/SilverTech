import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'SILVER TECH',
    version: '1.0.0',
    description: 'Documentación de la API de SILVER TECH 💻',
  },
  servers: [
    {
      url: 'http://localhost:3030',
      description: 'Servidor de desarrollo',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;