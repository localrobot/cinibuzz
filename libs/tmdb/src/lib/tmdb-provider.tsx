import { PropsWithChildren, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AXIOS_INSTANCE } from '../axios';

const client = new QueryClient({
  defaultOptions: {
    mutations: { retry: 0 },
    queries: { retry: 0, refetchOnWindowFocus: false },
  },
});

export interface TMDBProviderProps {
  baseURL: string;
  accessToken: string;
}

function useAxiosInterceptors(props: TMDBProviderProps) {
  useEffect(() => {
    const id = AXIOS_INSTANCE.interceptors.request.use(config => ({
      ...config,
      baseURL: props.baseURL,
      headers: { ...config.headers, Authorization: `Bearer ${props.accessToken}` },
    }));

    return () => AXIOS_INSTANCE.interceptors.request.eject(id);
  }, [props.accessToken, props.baseURL]);
}

export function TMDBProvider({ children, ...props }: PropsWithChildren<TMDBProviderProps>) {
  useAxiosInterceptors(props);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default TMDBProvider;
