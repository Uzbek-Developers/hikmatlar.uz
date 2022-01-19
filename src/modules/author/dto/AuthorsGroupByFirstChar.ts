import { Author } from '../../../entities/Author';
export type AuthorsGroupByFirstChar = {
  char: string;
  authors: Author[];
};
