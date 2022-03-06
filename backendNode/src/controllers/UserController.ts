import { Request, Response} from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    signUpUser = async (req:Request, res:Response) => {
        try {
            const {email, name, password, role} = req.body;
            const result = await new UserBusiness().signUpUser({
                email,
                name,
                password,
                role
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

    loginUser = async(req:Request, res:Response) => {
        try{
            const {email, password} = req.body
            const token = await new UserBusiness()
            .getUserByEmail({email, password})
            res.status(200).send({token})
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
            const{email, password} = req.body
            const users = await new UserBusiness().getAllUsers({email, password})
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