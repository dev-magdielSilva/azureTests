import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

export class BaseDataBase {
  private static connection: Knex | null = null;

  protected getConnection = (): Knex => {
    if (!BaseDataBase.connection) {
      BaseDataBase.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
          port: 3306,
          multiStatements: true,
        }
      })
    }
    return BaseDataBase.connection
  }

  public static destroyConnection = async():Promise<void> => {
      if(BaseDataBase.connection){
          await BaseDataBase.connection.destroy()
          BaseDataBase.connection = null
      }
  }
}