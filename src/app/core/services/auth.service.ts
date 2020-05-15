import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CookieService } from '../services/cookie.service';
import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
   user: User;
    constructor(private http: HttpClient, private cookieService: CookieService) {
    }
    /**
     * Returns the current user
     */
    public currentUser(): User {
        if (!this.user) {
            this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
        }
        return this.user;
    }
    /**
     * Performs the auth
     * 
     */
    // login(email: string, password: string) {
    //     return this.http.post<any>(`/api/login`, { email, password })
    //         .pipe(map(user => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.token) {
    //                 this.user = user;
    //                 // store user details and jwt in cookie
    //                 this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
    //             }
    //             return user;
    //         }));
    // }

    logins(login: any): Observable<any> {
        console.log(login)
        const httpOptions = {
            headers: new HttpHeaders({ 'content-type': 'application/json'})
          }
    return  this.http.post('http://localhost:7000/api/login', { SUi_loginName: login.SUi_loginName, SUi_encryptPassword: login.SUi_encryptPassword },httpOptions)
      }
      
    /**
     * Logout the user
     */
    logout() {
        // remove user from local storage to log user out
        this.cookieService.deleteCookie('currentUser');
        this.user = null;
    }
}

