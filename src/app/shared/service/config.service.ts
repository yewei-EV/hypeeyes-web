import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../constant';
import { Observable } from 'rxjs';
import { Config } from '../models/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private url = Constant.apiUrl + '/configs';
  constructor(private http: HttpClient) { }
  public getConfig(): Observable<Config> {
    return this.http.get<Config>(this.url);
  }
}
