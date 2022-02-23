import { Component, OnInit } from '@angular/core';
import { Ibook } from '../book';
import { BookService } from '../book.service';
import { IAddBook } from '../Models/Addbook';
import { SharedService } from '../services/shareddata.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  
  books:Ibook[]=[];
  constructor(private _bookService:BookService,private sharedservice:SharedService) {
       
  }
  passData(book:Ibook){
      this.sharedservice.sharedData=book;
  }
  ngOnInit(): void {
      this._bookService.getBooks()
          .subscribe((data: Ibook[]) => {
              
              console.log(data);
              this.books = data;
          });
  }


}
