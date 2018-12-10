import { AxiosRequestConfig, AxiosResponse } from 'axios';
export interface UInterceptor {
    response?: (response: AxiosResponse) => Promise<AxiosResponse>;
    request?: (config: AxiosRequestConfig) => Promise<AxiosRequestConfig>;
}