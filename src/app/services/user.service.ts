import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API_URL: string = "http://localhost:3000/users";

  userSubject: BehaviorSubject<any>;
  currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem("user")));
    this.currentUser = this.userSubject.asObservable();
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.API_URL}`, user);
  }
  saveUserState(userData) {
    localStorage.setItem("user", JSON.stringify(userData));
    this.userSubject.next(userData);
  }

  clearUserState() {
    localStorage.clear();
    this.userSubject.next(null);
  }

  public get User(): any {
    //return this.userSubject.value;
    return this.http.get<User[]>(this.API_URL);
  }
}
