export interface InputListUserDTO {
  page: number;
  limit: number;
  order: string;
  sort: string;
  filter: string;
}

export interface OutputListUserDTO {
  users: {
    id: string;
    name: string;
    email: string;
    level: string;
  }[];
  total: number;
}
