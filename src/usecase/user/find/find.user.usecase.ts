import UserRepositoryInterface from "@app/domain/user/repository/user-repository.interface";
import { Injectable } from "@nestjs/common";
import { InputFindUserDTO, OutputFindUserDTO } from "./find.user.dto";

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
