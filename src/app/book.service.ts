import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ibook } from './book';

@Injectable({providedIn: 'root'})
export class BookService{
    baseApiUrl: string = "http://localhost:44095/api/book";
    constructor(private httpClient: HttpClient) {
        
    }
    getBooks(): Observable<Ibook[]>{        
        return this.httpClient.get<Ibook[]>(this.baseApiUrl)
    }

}