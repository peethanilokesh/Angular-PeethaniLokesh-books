import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAddBook } from '../Models/Addbook';

@Injectable({providedIn: 'root'})
export class SharedService {
    constructor(private httpClient: HttpClient) { }
    sharedData:IAddBook={
    bookName:'',
    description:'',
    amount:0,
    author:''
    }
}