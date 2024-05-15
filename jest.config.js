/** @type {import('jest').Config} */
const dotenv = require("dotenv");

//set to test by default
process.env.NODE_ENV = process.env.NODE_ENV || test

const envFile = "./" + `.env.${process.env.NODE_ENV}`;
console.log('envFile = ' + envFile);
dotenv.config({
    path:  envFile
});
const config = {
    setupFiles: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
    verbose: true,
  };
  
module.exports = config;