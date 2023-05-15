import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";
import Seeder from "./Seeding/Seed";
require("dotenv").config();

const app = express();

app.use(
    cors({
        credentials: true,
    })
);

app.use(compression());
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose
    .connect(process.env.ConnectionString!)
    .then(async () => {
        console.log("Connected to MongoDB");
        await Seeder.SeedPokemon();
        await Seeder.SeedEvolutionLines();
    })
    .catch((error: Error) => console.log(error));

app.use("/", router());
app.use((error: Error, _: express.Request, response: express.Response, _next: express.NextFunction) =>
    response.status(500).json({ error: error })
);

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});
