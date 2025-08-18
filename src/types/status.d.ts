import { EnumAsUnion } from "@/decorators/enumAsUnion.decorator"
import StatusEnum from "@/enums/status.enum"

export type StatusKey = keyof typeof StatusEnum
export type Status = EnumAsUnion<typeof StatusEnum>
export type StatusMap = Record<StatusKey, Status>
export type setStatus = (status: Status) => void