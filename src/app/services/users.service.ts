import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../state'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<user[]> {
    return this.http.get<user[]>(`${this.url}`);
  }
}
