import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {createIngredient, Ingredient} from 'src/app/api/api.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeUuid: string = this.route.snapshot.params['uuid'];
  isEditMode: boolean = this.route.snapshot.url[2]?.path === 'edit';
  isEditEnabled: boolean = false;

  title: string = '';
  content: string = '';
  typeOfDish: string = '';
  ingredients: Ingredient[] = [];
  tags: string[] = [];

  columns = ['ingredient','amount'];
  columnsWithEditable = ['ingredient','amount','delete'];

  constructor(private route: ActivatedRoute, private service: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.service.getByUuid(this.recipeUuid).subscribe((data) => {
      this.title = data.title;
      this.typeOfDish = data.typeOfDish;
      this.content = data.content;
      this.ingredients = data.ingredients.map((i) => createIngredient(i.ingredient, i.amount));
      this.tags = data.tags;
    });
    this.isEditEnabled = this.service.isEditEnabled();
  }

  onIngredientChange(uuid: string, ingredient: string, amount: string) {

  }

  addIngredient() {
    this.ingredients = [...this.ingredients, createIngredient('', '')];
  }

  removeIngredient(uuid: string) {
    this.ingredients = this.ingredients.filter((i) => i.uuid !== uuid);
  }

  editButtonClicked() {
    this.router.navigate([`/recipe/${this.recipeUuid}/edit`]);
  }

  cancelButtonClicked() {
    this.router.navigate([`/recipe/${this.recipeUuid}`]);
  }

  saveButtonClicked() {
    console.log("save " + this.title + ", składniki: ");
    console.log(this.ingredients);
    this.router.navigate([`/recipe/${this.recipeUuid}`]);
  }
}
