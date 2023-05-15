import express from "express";
import { GetTeam, CreateTeam } from "./TeamController";

export default (router: express.Router) => {
    router.get("/teams/:id", GetTeam);
    router.post("/teams", CreateTeam);
};
