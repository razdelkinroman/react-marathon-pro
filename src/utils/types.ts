enum Endpoints {
  getPokemons = 'getPokemons',
}

export type EndpointsType = keyof typeof Endpoints;
