export type Plan = {
    id: number
    name: string
    description: string
    analyzes: number
    price_month: number
    price_year: number
    status: boolean
    recommendation_priority: 0 | 1 | 2 | 3 | 4 | 5
    created_at: Date
    updated_at: Date
    deleted_at: Date
}