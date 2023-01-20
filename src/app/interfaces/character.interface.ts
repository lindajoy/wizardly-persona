export interface RickMortyCharacter {
    name: string,
    status: string,
    species: string,
    gender: string,
    origin: Originality,
    location: Location,
    image: string
}


export interface Originality {
   name: string,
   url: string,
}