import { Application } from 'express';
import { PokedexService } from '../services/pokedex.service';

export class PokedexController {
  private pokedexService: PokedexService;

  constructor(private app: Application) {
    this.pokedexService = new PokedexService();
    this.routes();
  }

  public routes() {
    this.app.route('/').get(this.pokedexService.testMessage);
  }
}