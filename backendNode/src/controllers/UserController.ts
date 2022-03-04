import { Request, Response} from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
    signUpUser = async (req:Request, res:Response) => {
        try {
            const {email, name, password, profile} = req.body;
            const result = await new UserBusiness().signUpUser({
                email,
                name,
                password,
                profile
            });
            res.status(201).send({
                message:result,
            });
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({
                    message:error.message
                })
            } else {
            res.status(400).send({
                message: "Unexpected database error!"
            })
        }
    }
    }
    getAllUsers = async(req:Request, res:Response) => {
        try{
            const users = await new UserBusiness().getAllUsers()
            res.status(200).send({users})
        } catch (error) {
            if(error instanceof Error){
                res.status(400).send({
                    message:error.message
                })
            } else {
                res.status(400).send({
                    message:"Unexpected database error!"
                })
            }
        }
    }



}