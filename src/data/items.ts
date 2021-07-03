export type Item = {
    type : string;
    name : string;
    talent : string;
    attributes : string;
    mods : string;
    uniqueSource : string;
    alternateSource : string;
    rarity : Rarity;
    brand : Brand;
}

export enum Rarity {
    exotic, highend
}

export enum Brand {
    none
}