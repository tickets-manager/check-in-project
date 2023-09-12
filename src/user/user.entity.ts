import { userLevel } from './dto/create-user.dto';

export class UserEntity {
  id: string;
  name: string;
  email: string;
  level: userLevel;
  password: string;
}
