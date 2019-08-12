import { Injectable } from '@angular/core';
import { Config } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Topic } from '../../shared/models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private url = Config.apiUrl + 'topics';

  constructor(private http: HttpClient) {
  }

}
