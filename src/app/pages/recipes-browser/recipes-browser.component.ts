import {Component, inject, OnInit} from '@angular/core';
import {Recipe, TypeOfDish} from 'src/app/api/api.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { UntypedFormBuilder } from '@angular/forms';
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

export interface RecipesFilters {
  title?: string;
  typeOfDish?: string;
  tags?: string[];
}

@Component({
  selector: 'app-recipes-browser',
  templateUrl: './recipes-browser.component.html',
  styleUrls: ['./recipes-browser.component.scss'],
})
export class RecipesBrowserComponent implements OnInit {
  recipes: Recipe[] = [];
  filters: RecipesFilters = {
    title: '',
    typeOfDish: '',
    tags: []
  };
  loading: boolean = false;
  tag: string = '';

  typeOfDishOptions: string[] = Object.keys(TypeOfDish);

  columns = ['title','typeOfDish'];

  filteredOptions: string[] = [];


  constructor() {}

  private service = inject(RecipeService);
  private fb = inject(UntypedFormBuilder);


  filtersForm = this.fb.group({
    title: '',
    typeOfDish: '',
    tags: this.filters.tags
  });

  ngOnInit(): void {
    this.loading = true;
    this.service.find(this.filters.title, this.filters.typeOfDish, this.filters.tags).subscribe((data) => {
      this.recipes = data;
      this.loading = false;
    });
  }

  submitFilters() {
    this.filters = {
      ...this.filters,
      title: this.filtersForm.get('title')?.value,
      typeOfDish: this.filtersForm.get('typeOfDish')?.value,
    }
    this.ngOnInit();
  }

  addTagToFilters() {
    if (this.tag && this.tag != '') {
      this.filters.tags?.push(this.tag);
    }
    this.tag = '';
    this.submitFilters();
  }

  removeTagFromFilters(tag: string) {
    this.filters.tags = this.filters.tags?.filter(e => e !== tag);
    this.submitFilters();
  }

  clearTitle() {
    this.filtersForm = this.fb.group({
      title: '',
      typeOfDish: this.filters.typeOfDish,
      tags: this.filters.tags
    })
    this.filters.title = '';
    this.submitFilters();
  }

  clearTagField() {
    this.tag = '';
  }

  setTag(event: Event) {
    this.tag = (event.target as HTMLInputElement).value.toUpperCase();
    if ((event as KeyboardEvent).key == 'Enter') {
      this.addTagToFilters();
    } else {
      this.getTagsByName(this.tag);
    }
  }

  getTagsByName(tag: string) {
    this.service.findTagsByName(tag).subscribe((data) => {
      this.filteredOptions = data;
    })
  }

  onTagSelect(event: MatAutocompleteSelectedEvent) {
    this.filters.tags?.push(event.option.value);
    this.tag = '';
    this.filteredOptions = [];
    this.submitFilters();
  }

}
