import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { User } from '../user.interface';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  private apiUrl = 'http://localhost:3001'; //TODO à confirgurer par environnement
  constructor(
    private http: HttpClient,
  ) {
  }

  login(email, password) {
    return this.http.post<User>(`${this.apiUrl}/auth/login`, { email: email, password:  password})
      .pipe(map((token: string) => {
        localStorage.setItem('user', JSON.stringify(token));
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    //this.router.navigate(['/account/login']);
  }

  register(user: User) {
    return this.http.post(`${this.apiUrl}/user/register`,user);
  }

}
