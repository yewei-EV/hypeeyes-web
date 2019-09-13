import { Injectable } from '@angular/core';
import {Observable, pipe} from 'rxjs';
import { Category } from '../../shared/models/category';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../../shared';
import {filter, map} from 'rxjs/operators';
import {Topic} from '../../shared/models/topic';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = Constant.apiUrl + '/categories';
  constructor(private http: HttpClient) { }
  getAllPgcCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url)
      .pipe(map((categories: Category[]) => categories.filter((category: Category) => category.order <= 4)))
      .pipe(map((categories: Category[]) => this.convert(categories)));
  }

  getAllUgcCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url)
      .pipe(map((categories: Category[]) => categories.filter((category: Category) =>
        category.order > 4 && category.order !== 9 && category.order !== 14)))
      .pipe(map((categories: Category[]) => this.convert(categories)));
  }

  getSwiperCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url)
      .pipe(map((categories: Category[]) => categories.filter((category: Category) => category.name === '首页置顶')))
      .pipe(map((categories: Category[]) => this.convert(categories)));
  }

  private convert(categories: Category[]) {
    return categories.map(category => Object.assign(new Category(), category));
  }

  getTopicIds(category: Category): Observable<number[]> {
    return this.http.get<number[]>(`${this.url}/${category.cid}/topics`);
  }

  getTopicsByCid(num: number, cid: number): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.url}/${cid}?start=0&stop=${num}&sort=most-votes`)
      .pipe(map((topics: Topic[]) => topics.map(topic => Topic.convert(topic))));
  }
}
