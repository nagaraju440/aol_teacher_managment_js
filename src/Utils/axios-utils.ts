import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const BASE_URL_NODE="http://13.234.255.46:3001/";
const token = sessionStorage.getItem("user");
const defaultAccessToken=null;
const client = axios.create({ baseURL: BASE_URL_NODE });
export const request = async ({ ...options }: AxiosRequestConfig<any>) => {
    const accessToken = defaultAccessToken || token;
    client.defaults.headers.common.authorization = `Bearer ${accessToken}`;
    const onSuccess = (response: AxiosResponse<any, any>) => {
      if (typeof window !== "undefined") return response;
      return Promise.resolve({
        data: response.data,
      });
    };
    const onError = (error: any) => {
      if (error.response.status === 500) {
        if (typeof window !== "undefined") {
          // Client-Side
          //TODO: redirect the user to the login-page
          // window.location.href = "/login";
        } else {
          //Server-Side
          //TODO: redirect the user to the login page
        }
      }
      return Promise.reject(error);
    };
    try {
        const response = await client(options);
        return onSuccess(response);
    } catch (error) {
        return onError(error);
    }
  };
  