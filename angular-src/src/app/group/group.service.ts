import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { Group } from './group';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GroupService {

  private groupUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  //error handling
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Error code ${error.status}, ` +
        `body: ${error.error}`);
    }
    return new ErrorObservable(
      'Something went wrong, please try again later.');
  };

  //get all groups
  getAllGroups():Observable<Group[]>{
    return this.http.get<Group[]>(`${this.groupUrl}groups`).pipe(
      catchError(this.handleError)
    );
  }

  //get group by id
  getGroupById(id:number | string):Observable<Group>{
    return this.http.get<Group>(`${this.groupUrl}groups/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  //add new group
  addNewGroup(group):Observable<Group>{
    return this.http.post<Group>(`${this.groupUrl}groups`, group, httpOptions);
  }

  //update group
  updateGroup(group){
    return this.http.patch<Group>(`${this.groupUrl}groups/${group.id}`, JSON.stringify(group), httpOptions);
  }

  //delete group
  deleteGroup(id){
    return this.http.delete(`${this.groupUrl}groups/${id}`, httpOptions);
  }

}
