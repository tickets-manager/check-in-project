import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { EmailIsUnique } from '../validation/email-is-unique.validator';

export enum userLevel {
  admin = 'admin',
  user = 'user',
}

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email' })
  @EmailIsUnique({ message: 'Email already exists' })
  email: string;

  @IsNotEmpty({ message: 'User level is required' })
  @IsEnum(userLevel, { message: 'Invalid user level' })
  level: userLevel;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}
