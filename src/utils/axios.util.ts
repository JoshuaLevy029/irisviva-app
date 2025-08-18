import { Exception } from "@/exceptions/exception"
import { axiosOptions } from "@/types/axios"
import { Http } from "@/utils/http.util"
import axios, { AxiosError, AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios"

const DEFAULT_TIMEOUT = 360000
const MAX_CONTENT_LENGTH = 1073741824
const MAX_BODY_LENGTH = 1073741824

const defaultHeaders = {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
}

export const api = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_API_URL}`,
    timeout: DEFAULT_TIMEOUT,
    maxContentLength: MAX_CONTENT_LENGTH,
    maxBodyLength: MAX_BODY_LENGTH,
    headers: defaultHeaders,
})

export const raw = axios.create({
    timeout: DEFAULT_TIMEOUT,
    maxContentLength: MAX_CONTENT_LENGTH,
    maxBodyLength: MAX_BODY_LENGTH,
    headers: defaultHeaders,
})

raw.interceptors.response.use((response: AxiosResponse) => {
  return response
}, (error: AxiosError) => {
  if (!error.response || !error.status) {
    return {
      data: {
        message: error.message
      },
      status: Http.status('InternalServerError'),
      statusText: error.message || 'Internal Server Error',
      headers: new AxiosHeaders(),
      config: error.config || {},
      request: error.request || {},
    }
  }
  return error.response
})
api.interceptors.response.use((response: AxiosResponse) => {
  return response
}, (error: AxiosError) => {
  if (!error.response || !error.status) {
    return {
      data: {
        message: error.message
      },
      status: Http.status('InternalServerError'),
      statusText: error.message || 'Internal Server Error',
      headers: new AxiosHeaders(),
      config: error.config || {},
      request: error.request || {},
    }
  }
  return error.response
})

export async function request<T = any>({
  url,
  method = 'GET',
  data = null,
  token = '',
  process: axiosProcess = true,
  raw: rawRequest = false,
  ...restAxiosOptions
}: axiosOptions) {
  const axios = rawRequest ? raw : api
  const options: AxiosRequestConfig = {
    method: method,
    url: url,
    ...restAxiosOptions,
  }

  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`
    }
  }

  if (data) {
    if (method === 'GET') {
      options.params = data
    } else {
      options.data = data
    }
  }

  const request = axios.request(options)

  if (axiosProcess) {
    const response = request.then((response: AxiosResponse<T>) => {
      if (!Http.ok(response.status)) {
        if (response instanceof XMLHttpRequest) {
          throw new Exception(
            { message: 'Error during request.' },
            response.status > 0 ? response.status : Http.status('InternalServerError'),
            response.statusText || 'Internal Server Error',
            response.headers as any,
            response.config,
            response.request,
          )
        }
        throw response
      }

      return response
    }).catch((error: unknown) => {
      if (error instanceof Exception) {
        throw error
      }

      if (error && typeof error === 'object' && 'isAxiosError' in error && error.isAxiosError) {
        const axiosError = error as AxiosError<T>
        const response = axiosError.response
        throw new Exception<T>(
          response?.data || { message: axiosError.message } as T,
          response?.status || Http.status('InternalServerError'),
          response?.statusText || axiosError.message || 'Internal Server Error',
          response?.headers as any,
          axiosError.config,
          axiosError.request
        )
      }

      throw new Exception<T>(
        (error as any).data || { message: 'Unknown error occurred' } as T,
        (error as any).status || Http.status('InternalServerError'),
        (error as any).statusText || Http.statusText((error as any).status || Http.status('InternalServerError')),
        (error as any).headers as any,
        (error as any).config || {},
        (error as any).request || {}
      )
    })

    return response as Promise<AxiosResponse<T>>
  }

  return request as Promise<AxiosResponse<T>>
}

export default {
  get: (options: Omit<axiosOptions, 'method'>) => request({ ...options, method: 'GET' }),
  post: (options: Omit<axiosOptions, 'method'>) => request({ ...options, method: 'POST' }),
  put: (options: Omit<axiosOptions, 'method'>) => request({ ...options, method: 'PUT' }),
  patch: (options: Omit<axiosOptions, 'method'>) => request({ ...options, method: 'PATCH' }),
  delete: (options: Omit<axiosOptions, 'method'>) => request({ ...options, method: 'DELETE' }),
  raw: (options: axiosOptions) => request(options),
}