import { Injectable } from "@nestjs/common";
import UserFactory from "src/domain/user/factory/user.factory";
import UserRepositoryInterface from "src/domain/user/repository/user-repository.interface";
import { InputFindUserDTO, OutputFindUserDTO } from "./find.user.dto";
import { UserLevel } from "src/domain/user/value-object/user-level";

@Injectable()
export default class FindUserUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async execute(input: InputFindUserDTO): Promise<OutputFindUserDTO> {
    if (input.id) {
      const user = await this.userRepository.find(input.id);
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        level: user.level.toString(),
      };
    } else if (input.email) {
      const user = await this.userRepository.findByEmail(input.email);
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        level: user.level.toString(),
      };
    }
  }
}
