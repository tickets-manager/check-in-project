import { Injectable } from "@nestjs/common";
import UserFactory from "src/domain/user/factory/user.factory";
import UserRepositoryInterface from "src/domain/user/repository/user-repository.interface";
import { InputCreateUserDTO, OutputCreateUserDTO } from "./create.user.dto";
import { UserLevel } from "src/domain/user/value-object/user-level";

@Injectable()
export default class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async execute(input: InputCreateUserDTO): Promise<OutputCreateUserDTO> {
    const user = UserFactory.createWithLevel(
      input.name,
      input.email,
      input.password,
      UserLevel[input.level]
    );

    await this.userRepository.create(user);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      level: user.level,
    };
  }
}
