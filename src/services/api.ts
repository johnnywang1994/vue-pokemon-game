import axios from 'axios';
import type { AxiosPromise } from 'axios';
import utils from '../common/utils';
import type { AnyJson, APIResponse } from '@/stores/types';

const API = '/api';

export const instance = axios.create({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
    'Utm-Source': 'plt',
  },
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
  withCredentials: true,
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
  };
  return config;
});

interface RequestMap {
  [key: string]: <T>(url: string, data: any) => AxiosPromise<T>;
}

const requestMap: RequestMap = {
  get: (url, data) => instance.get(url, { params: data }),
  put: (url, data) => instance.put(url, data),
  delete: (url, data) => instance.delete(url, { params: data }),
  post: (url, data) => instance.post(url, data),
};

export default function<R>(method: string, url: string, data: AnyJson = null): APIResponse<R> {
  const requestType = method.toLowerCase();
  const normalizedParams = utils.snakifyKeys(data);
  const requestHandler = requestMap[requestType];

  if (requestHandler) {
    return requestHandler(url, normalizedParams)
      .then((res) => utils.camelizeKeys(res.data)) as APIResponse<R>;
  }
  throw new Error(
    `Unknown request method of ${method}! You might have a typo.`,
  );
}
