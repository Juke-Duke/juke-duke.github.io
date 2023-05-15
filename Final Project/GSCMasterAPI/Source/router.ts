import express from "express";
import Pokemon from "./Pokemon/PokemonRouter";
import EvolutionLine from "./EvolutionLines/EvolutionLineRouter";
import Teams from "./TeamBuilder/TeamRouter";

const router = express.Router();

export default (): express.Router => {
    Pokemon(router);
    EvolutionLine(router);
    Teams(router);

    return router;
};
