import axios, { AxiosRequestConfig } from 'axios';

export const AXIOS_INSTANCE = axios.create();

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({ ...config, cancelToken: source.token }).then(({ data }) => data);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (promise as any).cancel = () => {
    source.cancel('Query was cancelled by React Query');
  };

  return promise;
};
