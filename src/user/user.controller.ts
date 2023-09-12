import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { CreateUserDTO } from './dto/create-user.dto';
import { v4 as uuid } from 'uuid';
import { UserEntity } from './user.entity';
import { ListUserDTO } from './dto/list-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('/users')
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
      message: 'User created successfully',
      user: new ListUserDTO(userEntity.id, userEntity.name),
    };
  }

  @Get()
  async findAll() {
    const users = await this.userRepository.listAll();
    const usersList = users.map((user) => new ListUserDTO(user.id, user.name));

    return usersList;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() newData: UpdateUserDTO) {
    const userAtt = await this.userRepository.update(id, newData);

    return {
      message: 'User updated successfully',
      user: new ListUserDTO(userAtt.id, userAtt.name),
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    await this.userRepository.deleteUser(id);

    return {
      message: 'User deleted successfully',
    };
  }
}
