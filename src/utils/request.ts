import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import type { EndpointsType } from './types';

async function req(endpoint: EndpointsType) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));
  const json = fetch(uri).then((resp) => resp.json());

  return json;
}
export default req;
