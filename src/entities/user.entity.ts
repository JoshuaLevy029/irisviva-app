export type User = {
    id: number
    name: string
    email: string
    age: number
    occupation: string
    contact: string
    photo: string
    role: 'user' | 'admin' | 'professional'
    language: 'pt_BR' | 'en'
    verified: boolean
    password: string
    status: boolean
    refresh_token: string
    created_at: Date
    updated_at: Date
    deleted_at: Date

    reports: number
    plan: string
    max_reports: number
}