// configuracao do teste funcional, de ponta a ponta da aplicacao.
// testes endtoend = teste funcional

const { resolve } = require('path');

const root = resolve(__dirname, '..');
// importando na configuracao global e sobrescrevendo algumas chaves:
// como diretorio root, displayName etc.
const rootConfig = require(`${root}/jest.config.js`);

module.exports = { ...rootConfig, ...{
  rootDir: root,
  displayName: 'end2end-tests',
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
  testMatch: ['<rootDir>/test/**/*.test.ts'],
}};
