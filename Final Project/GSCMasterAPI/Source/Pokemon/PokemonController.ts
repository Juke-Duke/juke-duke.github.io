import express from "express";
import PokemonModel from "./PokemonSchema";

export const GetAllPokemon = async (_: express.Request, response: express.Response) => {
    const pokemon = await PokemonModel.find();
    return response.status(200).json(pokemon);
};

export const GetPokemonByName = async (request: express.Request, response: express.Response) => {
    const pokemon = await PokemonModel.findOne({
        name: request.params.nameOrNationalNumber
    });
    return response.status(200).json(pokemon);
};

export const GetPokemonByNationalNumber = async (request: express.Request, response: express.Response) => {
    const pokemon = await PokemonModel.findOne({
        nationalNumber: request.params.nameOrNationalNumber
    });
    return response.status(200).json(pokemon);
};

export const GetPokemonByNameOrNationalNumber = async (request: express.Request, response: express.Response) => {
    const isNationalNumber: boolean = !isNaN(parseInt(request.params.nameOrNationalNumber));

    if (isNationalNumber) return await GetPokemonByNationalNumber(request, response);

    return await GetPokemonByName(request, response);
};

export const GetPokemonDescription = async (request: express.Request, response: express.Response) => {
    const nationalNumber = parseInt(request.params.nationalNumber);
    const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nationalNumber}/`);
    const json: any = await data.json();
    const description: string = json.flavor_text_entries.find((entry: any) => entry.language.name === "en").flavor_text;
    return response.status(200).json(description);
};
