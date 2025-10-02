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
    bio: string
    website: string
    social_media: {
        type: 'instagram' | 'facebook' | 'twitter' | 'linkedin' | 'youtube' | 'tiktok' | 'x_twitter' | 'threads' | 'other'
        data: string
    }[]
    verified: boolean
    password: string
    status: boolean
    refresh_token: string
    created_at: string
    updated_at: string
    deleted_at: string

    reports: number
    plan: string
    max_reports: number
    end_date: string
    start_date: string
    analyzes_percentage: number
}