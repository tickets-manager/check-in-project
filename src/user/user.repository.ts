import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
  // TODO: add a database connection - Prisma
  // https://docs.nestjs.com/recipes/prisma#set-up-prisma
  private users: UserEntity[] = [];

  private searchUser(id: string) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async create(user: UserEntity) {
    this.users.push(user);
    console.log(this.users);
  }

  async listAll() {
    return this.users;
  }

  async findByEmail(email: string) {
    return !!this.users.find((user) => user.email === email);
  }

  async update(id: string, newDataUser: Partial<UserEntity>) {
    const user = this.searchUser(id);

    Object.entries(newDataUser).forEach(([key, value]) => {
      if (key === "id") {
        return;
      }
      user[key] = value;
    });

    return user;
  }

  async deleteUser(id: string) {
    const user = this.searchUser(id);
    this.users = this.users.filter((userInMemory) => userInMemory.id !== id);
    return user;
  }
}
