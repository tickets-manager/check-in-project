import { UserLevel } from "@app/domain/user/value-object/user-level";

export class UserEntity {
  id: string;
  name: string;
  email: string;
  level: UserLevel;
  password: string;
}
