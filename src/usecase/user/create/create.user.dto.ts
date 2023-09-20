export interface InputCreateUserDTO {
  name: string;
  email: string;
  level: string;
  password: string;
}

export interface OutputCreateUserDTO {
  id: string;
  name: string;
  email: string;
  level: string;
}
