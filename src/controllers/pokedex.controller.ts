import axios, { AxiosResponse } from 'axios';
import { Request, Response, NextFunction } from "express";
import { Pokemon } from '../models/interfaces/pokemon.interface';
import { Result } from '../models/interfaces/result.interface';

const indexRoute = (req: Request, res: Response) => {
  return res.status(200).json('Hello!');
}

const listPokemon = async (req: Request, res: Response, next: NextFunction) => {
  let limit = req.params.limit
  let offset = req.params.offset
  let result: AxiosResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  let pokemonList: [Result] = result.data;
  return res.status(200).json(pokemonList);
}

const searchPokemon = async (req: Request, res: Response, next: NextFunction) => {
  let pokemon = req.params.pokemon
  console.log(pokemon);
  
  let result: AxiosResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  let searchResult: [Pokemon] = await result.data;
  return res.status(200).json(searchResult);
}

export default { listPokemon, searchPokemon };