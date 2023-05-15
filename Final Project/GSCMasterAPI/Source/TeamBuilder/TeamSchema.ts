import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
    members: {
        type: [Number],
        required: true,
        ref: "Pokemon"
    }
});

const TeamModel = mongoose.model("Team", TeamSchema);

export default TeamModel;
