import { UserEntity } from "@app/domain/user/entity/user.entity";
import UserFactory from "@app/domain/user/factory/user.factory";
import UserRepositoryInterface from "@app/domain/user/repository/user-repository.interface";
import { UserLevel } from "@app/domain/user/value-object/user-level";
import { PrismaService } from "@app/infra/database/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async prismaUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async prismaUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prismaService.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(user: UserEntity): Promise<void> {
    await this.prismaService.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        level: user.level.toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
  }

  async update(user: UserEntity): Promise<void> {
    const persistedUser = await this.prismaUser({ id: user.id });

    if (!persistedUser) {
      throw new Error("User not found");
    }

    await this.prismaService.user.update({
      where: { id: user.id },
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        level: user.level.toString(),
        createdAt: persistedUser.createdAt,
        updatedAt: new Date().toISOString(),
      },
    });
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.prismaUsers({});

    return users.map((user) => {
      const { id, name, email, password, level } = user;
      return UserFactory.createWithIdAndLevel(
        id,
        name,
        email,
        password,
        UserLevel[level]
      );
    });
  }

  async find(id: string): Promise<UserEntity> {
    const user = await this.prismaUser({ id });

    if (!user) {
      throw new Error("User not found");
    }

    const { name, email, password, level } = user;

    return UserFactory.createWithIdAndLevel(
      id,
      name,
      email,
      password,
      UserLevel[level]
    );
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const user = await this.prismaUser({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const { id, name, password, level } = user;

    return UserFactory.createWithIdAndLevel(
      id,
      name,
      email,
      password,
      UserLevel[level]
    );
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.user.delete({
      where: { id },
    });

    return;
  }
}
