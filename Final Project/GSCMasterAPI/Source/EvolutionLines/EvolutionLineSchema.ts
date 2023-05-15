import mongoose from "mongoose";

export interface EvolutionLine {
    stage1: number;
    stage2: number[];
    stage3: number[];
}

export const EvolutionLineSchema = new mongoose.Schema({
    stage1: { type: Number, required: true, ref: "Pokemon" },
    stage2: { type: [Number], required: true, ref: "Pokemon" },
    stage3: { type: [Number], required: true, ref: "Pokemon" }
});

export const EvolutionLineModel = mongoose.model("EvolutionLine", EvolutionLineSchema);

export default EvolutionLineModel;
