import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserRepository } from '../user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailIsUniqueValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(value: any): Promise<boolean> {
    const userExist = await this.userRepository.findByEmail(value);
    return !userExist;
  }
}

export const EmailIsUnique = (optionValidations: ValidationOptions) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: optionValidations,
      constraints: [],
      validator: EmailIsUniqueValidator,
    });
  };
};
