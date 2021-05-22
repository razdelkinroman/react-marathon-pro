const config = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru/api',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/v1/pokemons',
        },
      },
    },
  },
};
export default config;
