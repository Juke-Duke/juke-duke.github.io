import { AllPokemon, PokemonInput } from "./Pokemon";
import { Pokemon, PokemonModel } from "../Pokemon/PokemonSchema";
import { EvolutionLines } from "./EvolutionLines";
import { EvolutionLineModel } from "../EvolutionLines/EvolutionLineSchema";

const SeedPokemon = async (): Promise<void> => {
    await PokemonModel.deleteMany({});

    const allPokemon: Pokemon[] = AllPokemon.map((pokemonInput: PokemonInput, index: number): Pokemon => {
        const {
            NationalNumber,
            Tier,
            Name,
            PrimaryType,
            SecondaryType,
            HP,
            Attack,
            Defense,
            SpecialAttack,
            SpecialDefense,
            Speed,
            FirstStage
        } = pokemonInput;

        return {
            _id: index + 1,
            nationalNumber: NationalNumber,
            tier: Tier,
            name: Name,
            primaryType: PrimaryType,
            secondaryType: SecondaryType,
            hp: HP,
            attack: Attack,
            defense: Defense,
            specialAttack: SpecialAttack,
            specialDefense: SpecialDefense,
            speed: Speed,
            firstStage: FirstStage
        };
    });

    await PokemonModel.insertMany(allPokemon);
    console.log("Seeded Pokemon");
};

const SeedEvolutionLines = async (): Promise<void> => {
    await EvolutionLineModel.deleteMany({});

    await EvolutionLineModel.insertMany(EvolutionLines as any);
    console.log("Seeded Evolution Lines");
};

const Seeder = { SeedPokemon, SeedEvolutionLines };

export default Seeder;
