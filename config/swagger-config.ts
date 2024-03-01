import { Options } from 'swagger-jsdoc';

const swaggerConfig: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Cattleya API',
      version: '1.0.0',
    },
  },
  apis: ['./src/backend/api/**/*.tsx'], // Adjust to your API routes path
};

export default swaggerConfig;
