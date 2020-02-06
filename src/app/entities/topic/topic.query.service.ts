import { Observable } from 'rxjs';
import { Topic } from '../../shared/models';
import { map } from 'rxjs/operators';
import { Constant } from '../../shared';
import { HttpClient } from '@angular/common/http';

export class TopicQueryService {
  constructor(private http: HttpClient) {
  }
  private url = Constant.apiUrl + '/query/topics';
  getByIds(ids: number[]): Observable<Topic[]> {
    const queryString = ids.map(id => 'id=' + id).join('&');
    console.log(`${this.url}/byIds?${queryString}`);
    return this.http.get<Topic[]>(`${this.url}/byIds?${queryString}`).pipe(map(topics =>
      topics.map(topic => Topic.convert(topic))));
  }
}
