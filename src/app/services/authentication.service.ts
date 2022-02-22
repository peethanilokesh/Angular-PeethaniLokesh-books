import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itoken } from '../Models/Token';
import { Ilogin } from '../Models/login';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private httpClient: HttpClient) { }
    baseAuthenticationUrl:string="http://localhost:44095/api/authentication/"
    login(loginDetails:Ilogin){
       return this.httpClient.post<Itoken>(this.baseAuthenticationUrl+'login',loginDetails);
    }
    loggedin(){
        return !!localStorage.getItem('token')
    }
    getToken(){
        return localStorage.getItem('token')
    }
    logout(){
        localStorage.removeItem('token')
    }
}