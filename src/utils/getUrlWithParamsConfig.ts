import config from '../config';
import type { EndpointsType } from './types';

function getUrlWithParamsConfig(endpointConfig: EndpointsType) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
  };
  return url;
}

export default getUrlWithParamsConfig;
