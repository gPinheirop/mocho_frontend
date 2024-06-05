import axios, {
  RawAxiosRequestHeaders,
  AxiosError,
  RawAxiosResponseHeaders,
} from "axios";
import { useStore } from "../store";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

type Params = {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  body?: any;
  headers: RawAxiosRequestHeaders;
};

export type HttpResponse<T, E = unknown> =
  | {
      hasError: true;
      error: AxiosError<E>;
    }
  | {
      hasError: false;
      data: T;
      headers: RawAxiosResponseHeaders & {
        [key: string]: any;
      };
    };

const defaultHeaders: RawAxiosRequestHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getHttpHeaders = {
  withoutAuthToken: async () => defaultHeaders,
  withAuthToken: async () => {
    const authorization = "Bearer " + useStore.getState().accessToken;
    return {
      ...defaultHeaders,
      Authorization: authorization,
    };
  },
};

export async function httpRequest<T, E = unknown>({
  method,
  url,
  body,
  headers,
}: Params): Promise<HttpResponse<T, E>> {
  try {
    const response = await api<T>({ method, url, data: body, headers });

    return {
      hasError: false,
      data: response.data,
      headers: response.headers,
    };
  } catch (error: any) {
    if (error.response.data.code === "token_not_valid") {
      useStore.getState().deleteToken();
    }
    return {
      hasError: true,
      error,
    };
  }
}
