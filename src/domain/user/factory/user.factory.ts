import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";
import { UserEntity as User } from "../entity/user.entity";
import { UserLevel } from "../value-object/user-level";

import { IsEmail, IsEnum, IsNotEmpty, MinLength } from "class-validator";
import { EmailIsUnique } from "../validator/user.class-validator.validator";

@Injectable()
export default class UserFactory {
  public static create(name: string, email: string, password: string): User {
    const user = new User();
    user.id = uuid();
    user.name = name;
    user.email = email;
    user.level = UserLevel.user;
    user.password = password;
    return user;
  }

  public static createAdmin(
    name: string,
    email: string,
    password: string
  ): User {
    const user = new User();
    user.id = uuid();
    user.name = name;
    user.email = email;
    user.level = UserLevel.admin;
    user.password = password;
    return user;
  }

  public static createWithId(
    id: string,
    name: string,
    email: string,
    password: string
  ): User {
    const user = new User();
    user.id = id;
    user.name = name;
    user.email = email;
    user.level = UserLevel.user;
    user.password = password;
    return user;
  }

  public static createAdminWithId(
    id: string,
    name: string,
    email: string,
    password: string
  ): User {
    const user = new User();
    user.id = id;
    user.name = name;
    user.email = email;
    user.level = UserLevel.admin;
    user.password = password;
    return user;
  }

  public static createWithLevel(
    name: string,
    email: string,
    password: string,
    level: UserLevel
  ): User {
    const user = new User();
    user.id = uuid();
    user.name = name;
    user.email = email;
    user.level = level;
    user.password = password;
    return user;
  }

  public static createWithIdAndLevel(
    id: string,
    name: string,
    email: string,
    password: string,
    level: UserLevel
  ): User {
    const user = new User();
    user.id = id;
    user.name = name;
    user.email = email;
    user.level = level;
    user.password = password;
    return user;
  }
}
