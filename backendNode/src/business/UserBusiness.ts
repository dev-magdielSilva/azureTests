import { UserDataBase } from "../data/user/UserDataBase";
import { User } from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { generateId } from "../services/IdGenerator";

export class UserBusiness {
    signUpUser = async (user:User) => {
        try {
            if(
                !user.email ||
                !user.name ||
                !user.password ||
                !user.profile
            ){
                throw new Error("Fill in the fields correctly")
            }
        const id:string = generateId()

        const hashPassword = await new HashManager().hash(user.password)

         await new UserDataBase().insertUser({
                id,
                email:user.email,
                name:user.name,
                password:hashPassword,
                profile:user.profile
        })

        const accessToken = new Authenticator().generateToken({
                id,
                profile: user.profile
        })

        return accessToken

        } catch (error) {
            if(error instanceof Error) {
                if(error instanceof Error) {
                    throw new Error(error.message)
                }else{
                    throw new Error("Unexpected database Error!")
                }
            }
        }
    }

    getAllUsers = async () => {
        const result = await new UserDataBase().selectAllUsers()
        return result
    }

    getUserById = 
}