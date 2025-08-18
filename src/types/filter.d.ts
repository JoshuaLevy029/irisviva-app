export type FilterProps<T = {}> = {
    page: number
    limit: number
    by: string
    direction: 'ASC'|'DESC'
    search?: string
    id?: string|number
    status?: true|false|null
} & T