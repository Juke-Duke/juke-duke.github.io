import { useEffect, useState } from "react";
import EvolutionLine from "./EvolutionLine";
import { GetPokemonDescription } from "./API";

export default function PokemonCard(pokemon: Pokemon) {
    const nationalNumber = String(pokemon.nationalNumber).padStart(3, "0");

    const [description, setDescription] = useState<string>("");

    const [isHovering, setIsHovering] = useState<boolean>(false);

    useEffect(() => {
        GetPokemonDescription(pokemon.nationalNumber).then((data: string) => setDescription(data));
    }, []);

    return (
        <div style={{ ...css.Card, ...(isHovering ? css.HoveringCard : {}) }} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <span style={css.Tier}>{pokemon.tier}</span>
            <img style={css.Sprite} src={`../../wwwroot/Images/PokemonSprites/${nationalNumber}-${pokemon.name}.gif`} alt={pokemon.name} />
            <div style={css.Data}>
                <span style={css.NationalNumber}>{nationalNumber}</span>
                <span style={css.Name}>{pokemon.name}</span>
                <span style={css.Types}>
                    <img style={css.Type} src={`../../wwwroot/Images/PokemonTypes/${pokemon.primaryType}Type.svg`} alt={pokemon.primaryType} />
                    {pokemon.secondaryType && <img style={css.Type} src={`../../wwwroot/Images/PokemonTypes/${pokemon.secondaryType}Type.svg`} alt={pokemon.secondaryType} />}
                </span>
                <div style={css.BaseStats}>
                    <span style={css.BaseStat}>
                        <p style={css.StatName}>HP</p>
                        <p style={css.StatValue}>{pokemon.hp}</p>
                    </span>
                    <span style={css.BaseStat}>
                        <p style={css.StatName}>ATK</p>
                        <p style={css.StatValue}>{pokemon.attack}</p>
                    </span>
                    <span style={css.BaseStat}>
                        <p style={css.StatName}>DEF</p>
                        <p style={css.StatValue}>{pokemon.defense}</p>
                    </span>
                    <span style={css.BaseStat}>
                        <p style={css.StatName}>SPA</p>
                        <p style={css.StatValue}>{pokemon.specialAttack}</p>
                    </span>
                    <span style={css.BaseStat}>
                        <p style={css.StatName}>SPD</p>
                        <p style={css.StatValue}>{pokemon.specialDefense}</p>
                    </span>
                    <span style={css.BaseStat}>
                        <p style={css.StatName}>SPE</p>
                        <p style={css.StatValue}>{pokemon.speed}</p>
                    </span>
                </div>
                <EvolutionLine firstStageNationalNumber={pokemon.firstStage} />
                <code style={css.Description}>{description}</code>
            </div>
        </div>
    );
}

const css: CSS = {
    Card: {
        background: "#FFFFFF",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
        width: "min(200px, 100%)",
        aspectRatio: "2 / 1",
        fontFamily: "Quadrabet",
        position: "relative",
        marginBottom: "2rem"
    },

    HoveringCard: {
        aspectRatio: "unset"
    },

    Tier: {
        fontSize: "0.6rem",
        position: "relative",
        top: "0.1rem",
        left: "0.8rem"
    },

    Data: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "1.5rem",
        gap: "0.5rem",
        height: "100%",
        overflowY: "hidden"
    },

    NationalNumber: {
        fontFamily: "PokemonGBC",
        fontSize: "0.8rem"
    },

    Name: {
        fontSize: "0.8rem"
    },

    Sprite: {
        width: "75px",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translate(-50%, -50%)"
    },

    Types: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: "1rem"
    },

    Type: {
        width: "2rem"
    },

    BaseStats: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        columnGap: "2rem",
        marginTop: "1rem",
        justifyItems: "center"
    },

    BaseStat: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    StatName: {
        fontFamily: "Quadrabet",
        fontSize: "0.60rem"
    },

    StatValue: {
        fontFamily: "PokemonGBC",
        fontSize: "0.60rem"
    },

    Description: {
        fontWeight: "bold",
        fontSize: "0.8rem",
        textAlign: "center",
        overflowY: "scroll",
        height: "100%",
        padding: "0 0.5rem"
    }
};
