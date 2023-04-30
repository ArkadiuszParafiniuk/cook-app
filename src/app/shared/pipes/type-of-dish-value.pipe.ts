import { Pipe, PipeTransform } from '@angular/core';
import {TypeOfDish} from "../../api/api.model";

@Pipe({ name: 'typeOfDishValue' })
export class TypeOfDishValuePipe implements PipeTransform {
  transform(key: string) {
    return Object.values(TypeOfDish)[Object.keys(TypeOfDish).indexOf(key)];
  }
}
