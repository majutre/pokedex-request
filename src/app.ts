import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
  }

  private setConfig() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
  }
}

export default new App().app;
