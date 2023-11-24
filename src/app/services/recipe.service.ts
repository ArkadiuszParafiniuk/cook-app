import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Recipe} from '../api/api.model';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient, private location: Location) {
  }

  getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.getBaseUrl() + `/recipe/getAll`);
  }

  find(
    title?: string,
    typeOfDish?: string,
    tags?: string[]
  ): Observable<Recipe[]> {
    if (typeOfDish === 'ALL') {
      typeOfDish = '';
    }
    const filters = JSON.parse(JSON.stringify({
      title: title,
      typeOfDish: typeOfDish,
      tags: tags
    }));
    const params = new HttpParams({
      fromObject: filters,
    });

    return this.http.get<Recipe[]>(this.getBaseUrl() + `/recipe/find`, {params: params});
  }

  getByUuid(uuid: string): Observable<Recipe> {
    return this.http.get<Recipe>(this.getBaseUrl() + `/recipe/` + uuid);
  }

  findTagsByName(
    tagName?: string
  ): Observable<string[]> {
    const filters = JSON.parse(JSON.stringify({
      tagName: tagName
    }));
    const params = new HttpParams({
      fromObject: filters,
    });

    return this.http.get<string[]>(this.getBaseUrl() + `/recipeTag/find`, {params: params});
  }

  isEditEnabled(): boolean {
    const dummyAnchor = document.createElement('a');
    dummyAnchor.href = this.location.prepareExternalUrl(this.location.path());
    return !dummyAnchor.hostname.startsWith('193.');
  }

  isEditEnabledOnBackend(): Observable<boolean> {
    return this.http.get<boolean>(this.getBaseUrl() + `/recipe/isEditEnabled`);
  }

  getBaseUrl(): string {
    const dummyAnchor = document.createElement('a');
    dummyAnchor.href = this.location.prepareExternalUrl(this.location.path());
    return "http://" + dummyAnchor.hostname + ":" + environment.backendport;
  }

}
