import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecipesBrowserComponent} from './pages/recipes-browser/recipes-browser.component';
import {RecipeDetailsComponent} from './pages/recipe-details/recipe-details.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './shared/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TypeOfDishValuePipe} from "./shared/pipes/type-of-dish-value.pipe";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    RecipesBrowserComponent,
    RecipeDetailsComponent,
    HeaderComponent,
    TypeOfDishValuePipe
  ],
  imports: [CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule, MatAutocompleteModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
