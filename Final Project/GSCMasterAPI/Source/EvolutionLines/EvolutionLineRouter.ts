import express from "express";
import { GetAllEvolutionLines, GetEvolutionLineByNationalNumber } from "./EvolutionLineController";

export default (router: express.Router) => {
    router.get("/evolution-lines", GetAllEvolutionLines);
    router.get("/evolution-lines/:nationalNumber", GetEvolutionLineByNationalNumber);
};
