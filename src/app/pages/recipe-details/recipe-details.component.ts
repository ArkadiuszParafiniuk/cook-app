import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/api/api.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeUuid: string = this.route.snapshot.params['uuid'];
  edit: boolean = this.route.snapshot.url[2]?.path === 'edit';

  title: string = '';
  content: string = '';
  typeOfDish: string = '';
  ingredients: Ingredient[] = [];
  tags: string[] = [];

  columns = ['ingredient','amount'];

  constructor(private route: ActivatedRoute, private service: RecipeService) {}

  ngOnInit(): void {
    this.service.getByUuid(this.recipeUuid).subscribe((data) => {
      this.title = data.title;
      this.typeOfDish = data.typeOfDish;
      this.content = data.content;
      this.ingredients = data.ingredients;
      this.tags = data.tags;
    });
  }
}
