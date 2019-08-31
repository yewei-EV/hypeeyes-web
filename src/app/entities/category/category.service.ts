import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../shared/models/category';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../../shared';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = Constant.apiUrl + '/categories';
  constructor(private http: HttpClient) { }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url).pipe(map((categories: Category[]) => this.convert(categories)));
  }

  private convert(categories: Category[]) {
    return categories.map(category => Object.assign(new Category(), category));
  }

  getTopicIds(category: Category): Observable<number[]> {
    return this.http.get<number[]>(`${this.url}/${category.cid}/topics`);
  }
}
