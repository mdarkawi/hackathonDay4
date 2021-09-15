import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { User } from '../user.interface';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  private apiUrl = 'localhost:3000'; //TODO à confirgurer par environnement
  constructor(
    private http: HttpClient
  ) {
  }

  login(username, password) {
    return this.http.post<User>(`${this.apiUrl}/users/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    //this.router.navigate(['/account/login']);
  }

  register(user: User) {
    return this.http.post(`${this.apiUrl}/users/register`, user);
  }

}
