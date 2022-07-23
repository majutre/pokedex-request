import { Pokemon } from "./pokemon.interface";

export interface Result {
  count: Number,
  next: String,
  previous?: String,
  results: Pokemon[]
}