export class Article {
  price!: number;

  amountInCart = 0;

  name!: string;

  description!: string;

  tags: string[] = [];

  id!: number;

  image!: string | undefined;
}
