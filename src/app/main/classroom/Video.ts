import { User } from "../user/login/authentication/user/user";

export interface Video {
  Titulo?: string;
  Descricao?: string;
  VideoUrl?: string;
  Autor?: number;
  Data?: string;
  User?: User;
}
