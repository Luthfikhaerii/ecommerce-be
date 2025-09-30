export type UserResponse = {
    id:number
    username:string
    email:string
    password:string
}

export type CreateUserRequest= {
    username:string
    email:string
    password:string
}