export class Food {

  // ? means optional
  // ! means required

  id!: string;
  name!: String;
  price!: number;
  tag?: String[];
  favorite!: boolean;
  stars!: number;
  imageUrl!: String;
  origins!: String[];
  cookTime!: String;
}
