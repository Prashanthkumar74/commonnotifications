import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/auth.models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  Url: string = "http://staging.heterohcl.com/development/azistareports/api/closingstock/";
  Url1: string = "http://localhost:7000/api/";
  httpOptios = {
    headers: new HttpHeaders({
      "Content-Type": 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  getDate(date: any): Observable<any> {
    var formData: any = new FormData();
    formData.append("DATE", date);
    return this.http.post(this.Url + date, formData)
  }
  // getAll() {
  //     return this.http.get<User[]>(`/api/login`);
  // }
  logins(login: any): Observable<any> {
    console.log(login)
    return this.http.post('http://localhost:7000/api/login', { SUi_loginName: login.SUi_loginName, SUi_encryptPassword: login.SUi_encryptPassword }, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json' })

  }
  addcategory(category): Observable<any> {
    console.log('category===', category)
    // alert(JSON.stringify(category))
    return this.http.post('http://localhost:7000/api/addcategory', { category }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json'
    })
  }

  adddetails(sendFcmNotification): Observable<any> {
    console.log('details===', sendFcmNotification)
    return this.http.post('http://localhost:7435/sendFcmNotification', { sendFcmNotification }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json'
    })
  }
  getcategory(): Observable<any> {
    //console.log('new===',)
    return this.http.get('http://localhost:7000/api/category')
  }
  getmastercategories(): Observable<any> {
    return this.http.get('http://localhost:7000/api/mastercategories')
  }
}