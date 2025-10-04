export type UserResponse = {
    id:number
    username:string
    email:string
    password:string
}

export type CreateUserRequest= {
    username:string
    email:string
    role:string
    password:string
}

export type UpdateUserRequest = {
    username?:string
    email?:string
    role?:string
    password?:string
}

export type LoginUserRequest = {
    email:string
    password:string
}