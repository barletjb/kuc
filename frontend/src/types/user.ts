
export interface NewUser {
    sexe: string
    username: string
    email: string
    password: string
    confirmPassword: string
    role: 'user' | 'admin'
}

export interface LoginUser {
    username: string
    password: string
}