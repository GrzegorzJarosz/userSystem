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

  //error handlig
  //
  //

  //get all groups
  getAllGroups():Observable<Group[]>{
    return this.http.get<Group[]>(`${this.groupUrl}groups`)
  }

}
