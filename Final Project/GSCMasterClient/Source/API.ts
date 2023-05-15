import axios from "axios";

const GSCMasterAPIURL = "http://localhost:8080";

export async function GetAllPokemon(): Promise<Pokemon[]> {
    const response = await axios.get(`${GSCMasterAPIURL}/pokemon`);
    return response.data;
}

export async function GetPokemonByNationalNumber(nationalNumber: number): Promise<Pokemon> {
    const response = await axios.get(`${GSCMasterAPIURL}/pokemon${nationalNumber}`);
    return response.data;
}

export async function GetPokemonDescription(nationalNumber: number): Promise<string> {
    const response = await axios.get(`${GSCMasterAPIURL}/pokemon/description/${nationalNumber}`);
    return response.data;
}

export async function GetEvolutionLine(nationalNumber: number): Promise<EvolutionLine> {
    const response = await axios.get(`${GSCMasterAPIURL}/evolution-lines/${nationalNumber}`);
    return response.data;
}

export async function GetTeam(teamId: string): Promise<Team> {
    const response = await axios.get(`${GSCMasterAPIURL}/teams/${teamId}`);
    return response.data;
}

export async function CreateTeam(memberIds: number[]): Promise<string> {
    const response = await axios({url: `${GSCMasterAPIURL}/teams`, data: memberIds, method: "POST"});
    return response.data._id;
}
