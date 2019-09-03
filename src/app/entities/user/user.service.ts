import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../../shared';
import { Observable } from 'rxjs';
import { Topic } from '../../shared/models/topic';
import { map } from 'rxjs/operators';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private url = Constant.apiUrl + '/users';

  getCurUser(): Observable<User> {
    return this.http.get<User>(`${this.url}/cur-user`).pipe(map(user => User.convert(user)));
  }
}
