/// <reference types="vite/client" />

interface CSS {
    [key: string]: React.CSSProperties;
}

type Tier = "Uber" | "OU" | "UUBL" | "UU" | "NUBL" | "NU" | "NFE" | "LC";

interface Pokemon {
    _id: number;
    nationalNumber: number;
    tier: Tier;
    name: string;
    primaryType: string;
    secondaryType: string;
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    firstStage: number;
}

interface EvolutionLine {
    stage1: Pokemon;
    stage2: Pokemon[];
    stage3: Pokemon[];
}

interface Team {
    _id: string;
    members: Pokemon[];
}
