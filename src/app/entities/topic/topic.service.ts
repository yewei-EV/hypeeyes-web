import { Injectable } from '@angular/core';
import { Config } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Topic } from '../../shared/models/topic';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) {
  }
  private url = Config.apiUrl + '/topics';

  static convert(topic: Topic) {
    topic.user = Object.assign(new User(), topic.user);
    return Object.assign(new Topic(), topic);
  }

  getById(id: number): Observable<Topic> {
    return this.http.get<Topic>(`${this.url}/${id}`).pipe(map(topic => TopicService.convert(topic)));
  }
}
