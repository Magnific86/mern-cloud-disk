export interface ICurrentUser {
  currentUser: "";
}

export interface ICurrUser {
  email: string;
  password: string;
}

export interface IStateUser {
  currentUser: ICurrUser;
  isAuth: boolean;
}

export interface IStateFile {
  file: {};
}
