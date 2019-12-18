import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
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

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url)
      .pipe(map((categories: Category[]) => this.convert(categories)));
  }

  constructor(private http: HttpClient) { }
  getAllPgcCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url)
      .pipe(map((categories: Category[]) => categories.filter((category: Category) => category.order <= 5 && category.name !== '发售日历')))
      .pipe(map((categories: Category[]) => this.convert(categories)));
  }

  getAllUgcCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url)
      .pipe(map((categories: Category[]) => categories.filter((category: Category) => category.name === '潮目社区')))
      .pipe(map((categories: Category[]) => this.convert(categories)));
  }

  getCategoryByName(cname: string): Observable<Category[]> {
    return this.http.get<Category[]>(this.url)
      .pipe(map((categories: Category[]) => categories.filter((category: Category) => category.name === cname)))
      .pipe(map((categories: Category[]) => this.convert(categories)));
  }

  private convert(categories: Category[]) {
    return categories.map(category => Object.assign(new Category(), category));
  }

  getTopicIds(category: Category): Observable<number[]> {
    return this.http.get<number[]>(`${this.url}/${category.cid}/topics`);
  }

  getTopicsByCid(cid: number, start: number, size: number): Observable<Topic[]> {
    if (!cid) {
      return of([]);
    }
    return this.http.get<Topic[]>(`${this.url}/${cid}/allTopics?start=${start}&stop=${start + size - 1}&sort=most_votes`)
      .pipe(map((topics: Topic[]) => topics.map(topic => Topic.convert(topic))));
  }
  getTopicsWithMainPostInfoByCid(cid: number, start: number, size: number) {
    return this.http.get<Topic[]>(`${this.url}/${cid}/withMainPostInfo?start=${start}&stop=${start + size - 1}&sort=most_votes`)
      .pipe(map((topics: Topic[]) => topics.map(topic => Topic.convert(topic))));
  }
}
