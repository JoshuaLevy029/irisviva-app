
export type Paginate<T = any, A = {}> = {
    items: T[];
    current: number;
    last: number;
    total?: number;
    per_page?: number;
} & A