import express from 'express';
import pokedexController from '../controllers/pokedex.controller';
const router = express.Router();

router.get('/pokemon/:limit?/:offset?', pokedexController.listPokemon);
router.get('/search/:pokemon', pokedexController.searchPokemon);

export = router;