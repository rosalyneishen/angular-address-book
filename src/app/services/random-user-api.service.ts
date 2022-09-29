import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  getRandomUsers(quantity: number): Observable<any> {
    return this.http.get(`https://randomuser.me/api/?results=${quantity}`);
  }

}
