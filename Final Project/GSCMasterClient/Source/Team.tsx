import { useState } from "react";
import { GetTeam, CreateTeam } from "./API";

export default function Team() {
    const [team, setTeam] = useState<Pokemon[]>([]);
    const [teamId, setTeamId] = useState<string | null>(null);
    const [memberIds, setMemberIds] = useState<number[]>([0, 0, 0, 0, 0, 0]);

    async function UpdateTeam(teamId: string | null) {
        if (teamId === null) return;

        const team = await GetTeam(teamId);
        setTeam(team.members);
    }

    return (
        <>
            <div style={css.Team}>
                {team.map((mon) => {
                    return <img src={`../../wwwroot/Images/PokemonSprites/${String(mon.nationalNumber).padStart(3, "0")}-${mon.name}.gif`} alt={mon.name} />;
                })}
            </div>
            <input type="text" placeholder="TeamID" value={teamId ?? ""} onChange={(onChangeEvent) => setTeamId(onChangeEvent.target.value)} />
            <button onClick={() => UpdateTeam(teamId)}>Load Team</button>
            <button onClick={() => setTeam([])}>Clear Team</button>
            <div>
                <input
                    type="number"
                    placeholder="Member1"
                    value={memberIds[0]}
                    onChange={(onChangeEvent) => setMemberIds([onChangeEvent.target.valueAsNumber, memberIds[1], memberIds[2], memberIds[3], memberIds[4], memberIds[5]])}
                />
                <input
                    type="number"
                    placeholder="Member2"
                    value={memberIds[1]}
                    onChange={(onChangeEvent) => setMemberIds([memberIds[0], onChangeEvent.target.valueAsNumber, memberIds[2], memberIds[3], memberIds[4], memberIds[5]])}
                />
                <input
                    type="number"
                    placeholder="Member3"
                    value={memberIds[2]}
                    onChange={(onChangeEvent) => setMemberIds([memberIds[0], memberIds[1], onChangeEvent.target.valueAsNumber, memberIds[3], memberIds[4], memberIds[5]])}
                />
                <input
                    type="number"
                    placeholder="Member4"
                    value={memberIds[3]}
                    onChange={(onChangeEvent) => setMemberIds([memberIds[0], memberIds[1], memberIds[2], onChangeEvent.target.valueAsNumber, memberIds[4], memberIds[5]])}
                />
                <input
                    type="number"
                    placeholder="Member5"
                    value={memberIds[4]}
                    onChange={(onChangeEvent) => setMemberIds([memberIds[0], memberIds[1], memberIds[2], memberIds[3], onChangeEvent.target.valueAsNumber, memberIds[5]])}
                />
                <input
                    type="number"
                    placeholder="Member6"
                    value={memberIds[5]}
                    onChange={(onChangeEvent) => setMemberIds([memberIds[0], memberIds[1], memberIds[2], memberIds[3], memberIds[4], onChangeEvent.target.valueAsNumber])}
                />
            </div>
            <button
                onClick={() => {
                    CreateTeam(memberIds).then((teamId) => setTeamId(teamId));
                }}
            >
                Save Team
            </button>
            <span style={css.TeamId}>{teamId ?? ""}</span>
        </>
    );
}

const css: CSS = {
    Team: {
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
        gap: "1rem",
        marginTop: "3rem",
        marginBottom: "3rem"
    },

    TeamId: {
        fontFamily: "monospace"
    }
};
