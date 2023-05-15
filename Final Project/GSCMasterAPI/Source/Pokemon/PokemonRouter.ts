import express from "express";
import { GetAllPokemon, GetPokemonByNameOrNationalNumber, GetPokemonDescription } from "./PokemonController";

export default (router: express.Router) => {
    router.get("/pokemon", GetAllPokemon);
    router.get("/pokemon/:nameOrNationalNumber", GetPokemonByNameOrNationalNumber);
    router.get("/pokemon/description/:nationalNumber", GetPokemonDescription);
};
