import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Awesome} from './awesome';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  constructor(private httpClient: HttpClient) { }
  getList(): Observable<Awesome[]> {
    return this.httpClient.get<Awesome[]>('http://localhost:3000/awesomes');
  }

  addAwesome(awesome: Awesome) {
    return this.httpClient.post('http://localhost:3000/awesomes', awesome);
  }

  deleteAwesome(id: number) {
    return this.httpClient.delete('http://localhost:3000/awesomes/' + id);
  }
}
