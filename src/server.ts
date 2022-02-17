// arquivo principal da aplicacao. configuracao do servidor
import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ForecastController } from './controllers/forecast';
import { Application } from 'express';

// ao instanciar um new SetupServer(xxx), pode se passar uma porta
// pra ela, que será usada pelo express.
export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  // método init, responsável por iniciar o servidor e coontrolar como
  // e o que deve ser chamado, inclusive pelo fato de nao ser possível
  // usar código assíncrono no construtor
  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  public getApp(): Application {
    return this.app;
  }
}
