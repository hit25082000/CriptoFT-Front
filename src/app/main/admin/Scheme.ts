import { Article } from "../news/Article";

export interface Scheme {
  Name?: string;
  Description?: string;
  Articles?: Article[];
}
