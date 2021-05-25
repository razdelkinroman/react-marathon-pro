import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: object) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {
      ...query,
    },
  };
  console.log('!!!!!!!!!', url);
  return url;
}

export default getUrlWithParamsConfig;
