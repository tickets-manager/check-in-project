import { UserLevel } from "@app/domain/user/value-object/user-level";

export default interface UserInterface {
  id: string;
  name: string;
  email: string;
  level: UserLevel;
  password: string;
}
