import { BaseDataBase } from "./baseDataBase/BaseDataBase";

class Migrations extends BaseDataBase {
    createTables = async () => {
        try {
            await this.getConnection().raw(
                `
                CREATE TABLE IF NOT EXISTS backendNode(
                    id VARCHAR(255) PRIMARY KEY NOT NULL,
                    email VARCHAR(255) NOT NULL,
                    nome VARCHAR(255) NOT NULL,
                    password VARCHAR(255) NOT NULL,
                    profile ENUM("ADMIN", "NORMAL")
                )
                `
            );
            console.log("successfully created tables")
        } catch (error) {
            if (error instanceof Error) {
                throw new Error (error.message)
            } else {
                throw new Error ("Database erro")
            }
        } finally {
            Migrations.destroyConnection()
            console.log("Migrations finished connection to database")
        }
    }
}
const createTablesMigrations = new Migrations()
createTablesMigrations.createTables()