// global.d.ts: d de declarations

declare namespace NodeJS {
  // essa interface corresponde à interface do nodejs real oficial
  interface Global {
    testRequest: import('supertest').SuperTest<import('supertest').Test>
  }
}