import { HttpMethods, HttpStatus } from "@/enums/http.enum"
import { HttpMethod, Status, StatusCode } from "@/types/http"

export const Http = {
    _methods: HttpMethods,
    _status: HttpStatus,
    method: (method: HttpMethod) => HttpMethods[method] || HttpMethods.GET,
    status: (status: Status) => HttpStatus[status] || HttpStatus.InternalServerError,
    statusText: (status: StatusCode) => HttpStatus[status] || 'Internal Server Error',
    ok: (status: StatusCode) => [HttpStatus.Ok, HttpStatus.Created, HttpStatus.Accepted, HttpStatus.NonAuthoritativeInformation, HttpStatus.NoContent, HttpStatus.ResetContent, HttpStatus.PartialContent, HttpStatus.MultiStatus, HttpStatus.AlreadyReported, HttpStatus.IMUsed].includes(status),
    failed: (status: StatusCode) => !Http.ok(status),
    is: (status:Status, code: StatusCode) => HttpStatus[status] === code,
}