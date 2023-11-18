export type PokemonData = {
  sprites: {
    front_default: string
  }
  name: string;
  id: number;
  types: [
    {
      type: {
        name: string
      }
    }
  ]
};
