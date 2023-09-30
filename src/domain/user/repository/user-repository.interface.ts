import RepositoryInterface from "src/domain/@shared/repository/repository-interface";
import { UserEntity as User } from "../entity/user.entity";

export default interface UserRepositoryInterface
  extends RepositoryInterface<User> {
  // implemented methods
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  find(id: string): Promise<User>;
  findAll(
    pagination?: {
      page: number;
      limit: number;
    },
    filter?: {
      [key: string]: string;
    },
    sort?: {
      [key: string]: string;
    }
  ): Promise<User[]>;

  // extended methods
  findByEmail(email: string): Promise<User>;
  delete(id: string): Promise<void>;
}
