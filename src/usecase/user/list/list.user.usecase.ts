import UserRepositoryInterface from "@app/domain/user/repository/user-repository.interface";
import { Injectable } from "@nestjs/common";
import { InputListUserDTO, OutputListUserDTO } from "./list.user.dto";

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
