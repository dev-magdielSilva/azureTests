export interface User {
    email:string,
    name:string,
    password:string,
    profile: PROFILE_TYPE
}
export interface UserInsert extends User {
    id:string
}
export enum PROFILE_TYPE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}