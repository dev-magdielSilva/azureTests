import { app } from "./controllers/App"
import { userRouter } from "./router/userRouter";

app.use("/user", userRouter) 