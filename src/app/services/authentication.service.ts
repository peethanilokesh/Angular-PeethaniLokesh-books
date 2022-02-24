import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itoken } from '../Models/Token';
import { Ilogin } from '../Models/login';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private httpClient: HttpClient) { }
    // baseAuthenticationUrl:string="http://localhost:44095/api/authentication/"
    login(loginDetails:Ilogin){
       return this.httpClient.post<Itoken>(environment.baseApiUrl+'api/authentication/login',loginDetails);
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