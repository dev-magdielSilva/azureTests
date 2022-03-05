export class User {
    constructor(
        private id:string,
        private email: string,
        private name:string,
        private password:string,
        private role: USER_ROLE
    ){}

    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getName(){
        return this.name
    }
    getPassword(){
        return this.password
    }
    getRole(){
        return this.role
    }
    setId(id:string){
        this.id = id
    }
    setEmail(email:string){
        this.email = email
    }
    setName(name:string){
        this.name = name
    }
    setPassword(password:string){
        this.password = password
    }
    setRole(role:USER_ROLE){
        this.role = role
    }

    static stringToUserRole(input:string): USER_ROLE{
        switch (input){
            case "NORMAL":
                return USER_ROLE.NORMAL;
            case "ADMIN":
                return USER_ROLE.ADMIN;
            default:
                throw new Error("Invalid user role")
        }
    }

    static toUserModel(user:any):User {
        return new User(user.id, user.email, user.name, user.password, User.stringToUserRole(user.role))
    }
}
export enum USER_ROLE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export interface UserInput {
    email:string,
    name:string,
    password:string,
    role: USER_ROLE
}
export interface UserInsert extends UserInput {
    id:string
}
export interface UserLogin {
    email:string,
    password: string
}
