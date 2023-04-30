import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Recipe} from '../api/api.model';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${environment.base_url}/recipe/getAll`);
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

    return this.http.get<Recipe[]>(`${environment.base_url}/recipe/find`, {params: params});
  }

  getByUuid(uuid: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${environment.base_url}/recipe/` + uuid);
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

    return this.http.get<string[]>(`${environment.base_url}/recipeTag/find`, {params: params});
  }

}
