// responsavel por inicializar o servidor para todos os testes funcionais
// com o beforeAll

import { SetupServer } from "@src/server";
import supertest from "supertest";

// irá rodar antes de todos os testes da aplicacao, é o responsável por
// iniciar o servidor de testes da aplicacao em modo de teste e isso
// está descrito no arquivo jest.config.js dessa mesma pasta
beforeAll(() => {
  const server = new SetupServer();
  server.init();
  // o supertest suporta que se passe um app express pra ele
  // ele iniciará a app e deixará as rotas disponíveis
  global.testRequest = supertest(server.getApp());
});