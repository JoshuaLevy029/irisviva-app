import { MethodCode } from "@/enums/http"
import { AxiosRequestConfig, AxiosResponseHeaders, ResponseType } from "axios"

export type axiosOptions<T = any> = {
    url: string
    method?: MethodCode
    data?: AxiosRequestConfig<T> | T
    token?: string
    process?: boolean
    raw?: boolean
    headers?: AxiosResponseHeaders
    responseType?: ResponseType
}