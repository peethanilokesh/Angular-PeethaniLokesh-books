import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAddBook } from '../Models/Addbook';
import { Ibook } from '../book';

@Injectable({providedIn: 'root'})
export class SharedService {
    constructor(private httpClient: HttpClient) { }
    sharedData:Ibook={
        bookId:0,
    bookName:'',
    description:'',
    amount:0,
    author:''
    }
}