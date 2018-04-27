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

  private groupUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }



  //get all groups
  getAllGroups():Observable<Group[]>{
    return this.http.get<Group[]>(`${this.groupUrl}groups`)
  }

  //get group by id
  getGroupById(id:number | string):Observable<Group>{
    return this.http.get<Group>(`${this.groupUrl}groups/${id}`);
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
