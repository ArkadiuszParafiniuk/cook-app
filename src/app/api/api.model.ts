import { v4 as uuidv4 } from 'uuid';

export interface Recipe {
  uuid: string;
  title: string;
  content: string;
  ingredients: Ingredient[];
  typeOfDish: string;
  tags: string[];
}

export interface Ingredient {
  uuid: string;
  ingredient: string;
  amount: string;
}

export function createIngredient(ingredient: string, amount: string): Ingredient {
  const uuid = uuidv4();
  return {
    uuid: uuid,
    ingredient,
    amount,
  };
}

export enum TypeOfDish {
  BREAKFAST = "Śniadanie",
  DINNER = "Obiad",
  DESSERT = "Deser",
  DRINK = "Napój",
  ALL = "Wszystkie",
}

export function getTypeOfDishByEnumValue(enumValue: string) {
  return Object.keys(TypeOfDish)[
    Object.values(TypeOfDish).indexOf(enumValue as TypeOfDish)
    ];
}

