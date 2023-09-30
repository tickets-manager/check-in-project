import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { v4 as uuid } from "uuid";
import { CreateUserDTO } from "../../infra/dto/create-user.dto";
import { ListUserDTO } from "../../infra/dto/list-user.dto";
import { UpdateUserDTO } from "../../infra/dto/update-user.dto";
import { UserEntity } from "./entity/user.entity";
import { UserRepository } from "../../infra/database/prisma/service/user/user.service";

@Controller("/users")
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() user: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.id = uuid();
    userEntity.name = user.name;
    userEntity.email = user.email;
    userEntity.level = user.level;
    userEntity.password = user.password;

    this.userRepository.create(userEntity);
    return {
      message: "User created successfully",
      user: new ListUserDTO(userEntity.id, userEntity.name, userEntity.level),
      level: userEntity.level,
    };
  }

  @Get()
  async findAll() {
    const users = await this.userRepository.listAll();
    const usersList = users.map(
      (user) => new ListUserDTO(user.id, user.name, user.level)
    );

    return usersList;
  }

  @Put("/:id")
  async updateUser(@Param("id") id: string, @Body() newData: UpdateUserDTO) {
    const userAtt = await this.userRepository.update(id, newData);

    return {
      message: "User updated successfully",
      user: new ListUserDTO(userAtt.id, userAtt.name, userAtt.level),
    };
  }

  @Delete("/:id")
  async deleteUser(@Param("id") id: string) {
    await this.userRepository.deleteUser(id);

    return {
      message: "User deleted successfully",
    };
  }
}
