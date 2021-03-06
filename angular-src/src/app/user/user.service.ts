import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private userUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }



  //get all users
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.userUrl}users`)
  }

  //get user by id
  getUserById(id:number | string):Observable<User>{
    return this.http.get<User>(`${this.userUrl}users/${id}`);
  }

  //add new user
  addNewUser(user):Observable<User>{
    return this.http.post<User>(`${this.userUrl}users`, user, httpOptions);
  }

  //update user
  updateUser(user){
    return this.http.patch<User>(`${this.userUrl}users/${user.id}`, JSON.stringify(user), httpOptions);
  }

  //delete user
  deleteUser(id){
    return this.http.delete(`${this.userUrl}users/${id}`, httpOptions);
  }

}
