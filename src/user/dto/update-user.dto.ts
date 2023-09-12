import { IsEmail, IsOptional, MinLength } from 'class-validator';
import { userLevel } from './create-user.dto';

export class UpdateUserDTO {
  @IsOptional()
  name: string;

  @IsEmail({}, { message: 'Invalid email' })
  @IsOptional()
  email: string;

  @IsOptional()
  level: userLevel;

  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @IsOptional()
  password: string;
}
