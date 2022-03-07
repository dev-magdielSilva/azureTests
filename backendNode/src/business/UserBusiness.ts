import { UserDataBase } from "../data/user/UserDataBase";
import { User, UserInput, UserInsert, UserLogin } from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { generateId } from "../services/IdGenerator";

export class UserBusiness {
  signUpUser = async (user: UserInput) => {
    try {
      if (!user.email || !user.name || !user.password || !user.role) {
        throw new Error("Fill in the fields correctly");
      }
      const id: string = generateId();
      const hashPassword = await new HashManager().hash(user.password);

      await new UserDataBase().insertUser({
        id,
        email: user.email,
        name: user.name,
        password: hashPassword,
        role: user.role,
      });

      const accessToken = new Authenticator().generateToken({
        id,
        role: user.role,
      });
      return accessToken;
    } catch (error) {
      if (error instanceof Error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error("Unexpected database Error!");
        }
      }
    }
  };
  getUserByEmail = async (login: UserLogin) => {
    try {
      if (!login.email || !login.password) {
        throw new Error("fill in the fields correctly");
      }

      const userData = await new UserDataBase().getUserByEmail(login.email);
      if (!userData) {
        throw new Error("E-mail not found");
      }

      const hashCompare = await new HashManager().compare(
        login.password,
        userData.getPassword()
      );
      if (!hashCompare) {
        throw new Error("invalid password");
      }

      const accessToken = new Authenticator().generateToken({
        id: userData.getId(),
        role: userData.getRole(),
      });
      return accessToken;
    } catch (error) {
      if (error instanceof Error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error("Unexpected database Error!");
        }
      }
    }
  };

  getAllUsers = async (login: UserLogin) => {
    try {
      if (!login.email || !login.password) {
        throw new Error("fill in the fields correctly");
      }

      const userData = await new UserDataBase().getUserByEmail(login.email);
      if (!userData) {
        throw new Error("E-mail not found");
      }

      const hashCompare = await new HashManager().compare(
        login.password,
        userData.getPassword()
      );
      if (!hashCompare) {
        throw new Error("invalid password");
      }
      const users: any = await new UserDataBase().selectAllUsers();
      return users;
    } catch (error) {
      if (error instanceof Error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error("Unexpected database Error!");
        }
      }
    }
  };
}
