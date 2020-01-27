import { Injectable } from '@angular/core';
import { Constant } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Topic } from '../../shared/models/topic';
import { Post } from '../../shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) {
  }
  private url = Constant.apiUrl + '/topics';

  getById(id: number): Observable<Topic> {
    return this.http.get<Topic>(`${this.url}/${id}`).pipe(map(topic => Topic.convert(topic)));
  }

  getByIds(ids: number[]): Observable<Topic[]> {
    const queryString = ids.map(id => 'id=' + id).join('&');
    console.log(`${this.url}/byIds?${queryString}`);
    return this.http.get<Topic[]>(`${this.url}/byIds?${queryString}`).pipe(map(topics =>
      topics.map(topic => Topic.convert(topic))));
  }

  getMainPostByTid(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.url}/${id}/mainPost`).pipe(map(post => Post.convert(post)));
  }

}
