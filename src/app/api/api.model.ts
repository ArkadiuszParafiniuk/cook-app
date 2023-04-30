export interface Recipe {
  uuid: string;
  title: string;
  content: string;
  ingredients: Ingredient[];
  typeOfDish: string;
  tags: string[];
}

export interface Ingredient {
  ingredient: string;
  amount: string;
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

