import { useEffect, useState } from "react";
import { GetEvolutionLine } from "./API";

export default function EvolutionLine({ firstStageNationalNumber }: { firstStageNationalNumber: number }) {
    const [evolutionLine, setEvolutionLine] = useState<EvolutionLine | null>(null);

    useEffect(() => {
        GetEvolutionLine(firstStageNationalNumber).then((data: EvolutionLine) => setEvolutionLine(data));
    }, []);

    const stage1: Pokemon | null = evolutionLine?.stage1 ?? null;
    const stage2: Pokemon[] = evolutionLine?.stage2 ?? [];
    const stage3: Pokemon[] = evolutionLine?.stage3 ?? [];

    return (
        <div key={stage1?.nationalNumber} style={css.Evolution}>
            <img src={`../../wwwroot/Images/PokemonSprites/${String(stage1?.nationalNumber).padStart(3, "0")}-${stage1?.name}.gif`} alt={stage1?.name} />
            {stage2.length > 0 && (
                <div>
                    {stage2.map((mon) => (
                        <img src={`../../wwwroot/Images/PokemonSprites/${String(mon.nationalNumber).padStart(3, "0")}-${mon.name}.gif`} alt={mon.name} />
                    ))}
                </div>
            )}
            {stage3.length > 0 && (
                <div>
                    {stage3.map((mon) => (
                        <img src={`../../wwwroot/Images/PokemonSprites/${String(mon.nationalNumber).padStart(3, "0")}-${mon.name}.gif`} alt={mon.name} />
                    ))}
                </div>
            )}
        </div>
    );
}

const css: CSS = {
    Evolution: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "80%"
    }
};
