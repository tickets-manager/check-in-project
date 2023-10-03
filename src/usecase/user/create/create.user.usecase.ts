import UserFactory from "@app/domain/user/factory/user.factory";
import UserRepositoryInterface from "@app/domain/user/repository/user-repository.interface";
import { UserLevel } from "@app/domain/user/value-object/user-level";
import { Injectable } from "@nestjs/common";
import { InputCreateUserDTO, OutputCreateUserDTO } from "./create.user.dto";

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
