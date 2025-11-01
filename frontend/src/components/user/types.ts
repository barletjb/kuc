
export interface NewUser {
    sexe: string
    username: string
    email: string
    password: string
    confirmPassword: string
}

export interface LoginUser {
    username: string
    password: string
}