import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "../../infra/database/prisma/service/user/user.service";
import { EmailIsUniqueValidator } from "./validation/email-is-unique.validator";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, EmailIsUniqueValidator],
})
export class UserModule {}
