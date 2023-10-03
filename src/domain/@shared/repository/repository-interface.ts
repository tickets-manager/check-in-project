export default interface RepositoryInterface<T> {
  create(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  find(id: string): Promise<T>;
  findAll(
    pagination?: {
      page: number;
      limit: number;
    },
    filter?: {
      [key: string]: string;
    },
    sort?: {
      [key: string]: string;
    }
  ): Promise<T[]>;
}
