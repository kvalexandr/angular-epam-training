export interface User {
  id: number,
  token: string,
  name: {
    first: string,
    last: string
  },
  login: string,
  password: string
}

export interface UserLogin {
  login: string,
  password: string
}

export interface UserResponse {
  token: string
}

export abstract class UserStorageData {
  abstract add(name: string, data: any): void;

  abstract remove(name: string): void;

  abstract getByName(name: string): any;
}
