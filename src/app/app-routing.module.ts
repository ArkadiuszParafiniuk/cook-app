import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesBrowserComponent } from './pages/recipes-browser/recipes-browser.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesBrowserComponent,
  },
  {
    path: 'recipe/:uuid',
    component: RecipeDetailsComponent,
  },
  {
    path: 'recipe/:uuid/edit',
    component: RecipeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
