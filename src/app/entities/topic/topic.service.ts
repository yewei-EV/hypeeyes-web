import { Injectable } from '@angular/core';
import { Config } from '../../shared';
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
  private url = Config.apiUrl + '/topics';

  getById(id: number): Observable<Topic> {
    return this.http.get<Topic>(`${this.url}/${id}`).pipe(map(topic => Topic.convert(topic)));
  }

  getMainPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.url}/${id}/main-post`).pipe(map(post => Post.convert(post)));
  }

}
