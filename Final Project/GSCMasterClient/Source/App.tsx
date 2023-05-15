import "./App.css";
import PokemonCard from "./PokemonCard";
import GSCMasterBanner from "./GSCMasterBanner";
import { GetAllPokemon } from "./API";
import { useEffect, useState } from "react";
import Team from "./Team";

export default function App() {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [searchFilter, setSearchFilter] = useState<string>("");

    useEffect(() => {
        GetAllPokemon().then((data: Pokemon[]) => setPokemon(data));
    }, []);

    return (
        <>
            <GSCMasterBanner />
            <Team />
            <input
                type="text"
                placeholder="Search Pokemon"
                className="PokedexSearch"
                value={searchFilter}
                onChange={(onChangeEvent) => setSearchFilter(onChangeEvent.target.value)}
            />
            <div className="Pokedex">
                {pokemon
                    .filter((mon) => {
                        return mon.name.toLowerCase().includes(searchFilter.toLowerCase()) || String(mon.nationalNumber).includes(searchFilter);
                    })
                    .map((mon) => {
                        return (
                            <div
                                key={mon.nationalNumber}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    height: "fit-content"
                                }}
                            >
                                <PokemonCard {...mon} />
                            </div>
                        );
                    })}
            </div>
        </>
    );
}
