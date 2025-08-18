import { EnumAsUnion } from "@/decorators/enumAsUnion.decorator"
import { HttpMethods, HttpStatus } from "@/enums/http.enum"

export type HttpMethod = keyof typeof HttpMethods
export type HttpMethodCode = EnumAsUnion<typeof HttpMethods>

export type Status = keyof typeof HttpStatus
export type StatusCode = EnumAsUnion<typeof HttpStatus>