import mongoose from "mongoose";

export interface Pokemon {
    _id: number;
    nationalNumber: number;
    tier: Tier;
    name: string;
    primaryType: string;
    secondaryType: string | null;
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    firstStage: number;
}

const PokemonSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    nationalNumber: {
        type: Number,
        required: true
    },
    tier: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    primaryType: {
        type: String,
        required: true
    },
    secondaryType: {
        type: String,
        required: false
    },
    hp: {
        type: Number,
        required: true
    },
    attack: {
        type: Number,
        required: true
    },
    defense: {
        type: Number,
        required: true
    },
    specialAttack: {
        type: Number,
        required: true
    },
    specialDefense: {
        type: Number,
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    firstStage: {
        type: Number,
        required: true
    }
});

export const PokemonModel = mongoose.model("Pokemon", PokemonSchema);

export default PokemonModel;
