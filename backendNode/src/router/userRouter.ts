import { Router } from "express";
import { UserController } from "../controllers/UserController"

export const userRouter = Router();
const userController = new UserController()
userRouter.post("/signup", userController.)



