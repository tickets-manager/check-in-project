import { Injectable } from "@nestjs/common";
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import UserRepositoryInterface from "@app/domain/user/repository/user-repository.interface";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailIsUniqueValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepositoryInterface) {}

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
