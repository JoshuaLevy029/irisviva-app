export type Plan = {
    id: number
    name: string
    description: string
    analyzes: number
    analyzes_percentage: number
    price_month: number
    stripe_price_month_id: string
    price_year: number
    stripe_price_year_id: string
    stripe_id: string
    status: boolean
    recommendation_priority: 0 | 1 | 2 | 3 | 4 | 5
    created_at: Date
    updated_at: Date
    deleted_at: Date
}