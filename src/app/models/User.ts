export interface User {
  id: number,
  first_name: string,
  last_name: string
}

export interface UserLogin {
  email: string,
  password: string
}

export abstract class UserStorageData {
  abstract add(name: string, data: any): void;

  abstract remove(name: string): void;

  abstract getByName(name: string): UserLogin;
}
