import axios, { AxiosRequestConfig } from 'axios';

declare module 'axios' {
  interface AxiosResponse<T = any> {
    code: number;
    data: T;
    message: any;
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance;
}

const request = (options: AxiosRequestConfig) => {
  // create an axios instance
  const service = axios.create({
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000, // request timeout
    withCredentials: true,
  });

  // 请求拦截
  service.interceptors.request.use(
      (config) => {
        // do something before request is sent

/*        if (getToken() && config.headers) {
          // let each request carry token
          // please modify it according to the actual situation
          config.headers.Authorization = `Bearer ${getToken()}`;
        }*/
        return config;
      },
      (error) => {
        // do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
      }
  );

  // 响应
  service.interceptors.response.use(
      (response) => {
        const res = response.data;

        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 0) {
          console.log('response', response);
          // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
          if (res.code === 401 || res.code === 50012 || res.code === 50014) {
            console.log('授权失败');
          }

          return Promise.reject(new Error(res.message || 'Error'));
        }

        return res;
      },
      (error) => {
        console.log(`err${error}`); // for debug
        return Promise.reject(error);
      }
  );

  return service(options);
};

export default request;
