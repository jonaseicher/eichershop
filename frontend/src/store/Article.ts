export class Article {
  price!: number;

  amountInCart: number = 0;

  name!: string;

  description!: string;

  tags: string[] = [];

  id!: number;

  image!: string | undefined;
}
