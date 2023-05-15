import express from "express";
import TeamModel from "./TeamSchema";
import { ObjectId } from "mongoose";

export const GetTeam = async (request: express.Request, response: express.Response) => {
    const id: ObjectId | unknown = request.params.id;
    const team = await TeamModel.findById(id).populate("members");

    return response.status(200).json(team);
};

export const CreateTeam = async (request: express.Request, response: express.Response) => {
    const team: number[] = request.body;

    if (team.length === 0 || team.length > 6)
        return response.status(400).json({ message: "Team must have between 1 and 6 members." });

    const createdTeam = await TeamModel.create({ members: team });

    return response.status(200).json(createdTeam);
};
