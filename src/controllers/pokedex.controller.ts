import axios, { AxiosResponse } from 'axios';
import { Request, Response, NextFunction } from "express";
import { Pokemon } from '../models/interfaces/pokemon.interface';

const listPokemon = async (req: Request, res: Response, next: NextFunction) => {
  let result: AxiosResponse = await axios.get('https://pokeapi.co/api/v2/pokemon/');
  let pokes: [Pokemon] = result.data;
  return res.status(200).json( pokes );
}

export default { listPokemon };