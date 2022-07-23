import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { PokedexController } from "./controllers/pokedex.controller";

class App {
  public app: Application;
  public pokedexController: PokedexController;

  constructor() {
    this.app = express();
    this.setConfig();
    this.pokedexController = new PokedexController(this.app)
  }

  private setConfig() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
  }
}

export default new App().app;
