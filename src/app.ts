import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from './routes/pokemon.route'


class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
  }

  private setConfig() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use('/', routes);
    this.app.use((req, res, next) => {
      const error = new Error('not found');
      return res.status(404).json({
          message: error.message
      });
    });
  }
}

export default new App().app;
