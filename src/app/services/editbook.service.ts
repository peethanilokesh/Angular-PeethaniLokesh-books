import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ibook } from '../book';
import { IAddBook } from '../Models/Addbook';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EditService {
    constructor(private httpClient: HttpClient) { }
    // baseEditUrl:string="http://localhost:44095/api/book/"
   
    editbook(edit:IAddBook,num:number){
        
       return this.httpClient.put<any>(environment.baseApiUrl+'api/book/'+num.toString(),edit)
    }
}