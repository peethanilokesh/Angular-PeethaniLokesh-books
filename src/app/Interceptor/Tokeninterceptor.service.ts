import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import {Observable} from 'rxjs'
import { AuthService } from '../services/authentication.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    constructor(private injector:Injector) { }
    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        let authservice = this.injector.get(AuthService);
        
        let tokenizedRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authservice.getToken())
        })
        return next.handle(tokenizedRequest)

    }

    
}