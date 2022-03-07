import { User, UserInsert } from "../../model/user";
import { BaseDataBase } from "../baseDataBase/BaseDataBase";

export class UserDataBase extends BaseDataBase {
    private static TABLE_NAME = "backendNode"

    insertUser = async (user:UserInsert) => {
        try {
            await this.getConnection()
            .insert(user)
            .into(UserDataBase.TABLE_NAME)
        } catch (error) {
            if(error instanceof Error) {
                throw new Error(error.message)
            }else{
                throw new Error("Unexpected database Error!")
            }
        }
    };
    
    getUserByEmail = async(email:string) => {
        try {
            const result = await this.getConnection()
            .select("*")
            .where({email})
            .from(UserDataBase.TABLE_NAME)
            return User.toUserModel(result[0])
            
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
    selectAllUsers = async () => {
        try{
            const result:UserInsert[] = await this.getConnection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)
            return result[0]
        } catch (error) {
            if(error instanceof Error) {
                if(error instanceof Error) {
                    throw new Error(error.message)
                }else{
                    throw new Error("Unexpected database Error!")
                }
            }
        }
    };
    
    selectUserById = async(id:string)=> {
        try {
            const result:UserInsert[] = await this.getConnection()
            .select("*")
            .where({id})
            .from(UserDataBase.TABLE_NAME)
            return result[0]
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
}