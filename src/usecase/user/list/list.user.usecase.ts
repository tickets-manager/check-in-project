import { Injectable } from "@nestjs/common";
import UserFactory from "src/domain/user/factory/user.factory";
import UserRepositoryInterface from "src/domain/user/repository/user-repository.interface";
import { InputListUserDTO, OutputListUserDTO } from "./list.user.dto";
import { UserLevel } from "src/domain/user/value-object/user-level";

@Injectable()
export default class ListUserUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async execute(input: InputListUserDTO): Promise<OutputListUserDTO> {
    const users = await this.userRepository.findAll();

    return {
      users: users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        level: user.level.toString(),
      })),
      total: users.length,
    };
  }
}
