export interface InputFindUserDTO {
  id?: string;
  email?: string;
}

export interface OutputFindUserDTO {
  id: string;
  name: string;
  email: string;
  level: string;
}
