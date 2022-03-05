import express, {Express} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import dotenv from 'dotenv'

dotenv.config()



export const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const addres = server.address() as AddressInfo;
        console.log(`Server running on port http:localhost:${addres.port}`);
    } else {
        console.error(`Error starting server`)
    }
});