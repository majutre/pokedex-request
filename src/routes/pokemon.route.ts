import express from 'express';
import pokedexController from '../controllers/pokedex.controller';
const router = express.Router();

router.get('/pokemon', pokedexController.listPokemon);

export = router;