import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAddBook } from '../Models/Addbook';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AddbookService {
    constructor(private httpClient: HttpClient) { }
    // baseAddbookUrl:string="http://localhost:44095/api/book"
    addBook(bookDetails:IAddBook){
       return this.httpClient.post<any>(environment.baseApiUrl+'api/book',bookDetails);
    }
}