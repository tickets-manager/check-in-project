import { UserEntity } from "./entity/user.entity";

export default interface UserRepository {
  create(user: UserEntity): Promise<UserEntity>;
  listAll(): Promise<UserEntity[]>;
  update(id: string, newData: UserEntity): Promise<UserEntity>;
  deleteUser(id: string): Promise<void>;
}
