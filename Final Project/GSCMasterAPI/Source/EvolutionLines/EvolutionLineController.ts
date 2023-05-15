import express from "express";
import EvolutionLineModel from "./EvolutionLineSchema";

export const GetAllEvolutionLines = async (_: express.Request, response: express.Response) => {
    const evolutionLines = await EvolutionLineModel.find().populate(["stage1", "stage2", "stage3"]);
    return response.status(200).json(evolutionLines);
};

export const GetEvolutionLineByNationalNumber = async (request: express.Request, response: express.Response) => {
    const evolutionLine = await EvolutionLineModel.findOne({
        stage1: parseInt(request.params.nationalNumber)
    }).populate(["stage1", "stage2", "stage3"]);
    return response.status(200).json(evolutionLine);
};
