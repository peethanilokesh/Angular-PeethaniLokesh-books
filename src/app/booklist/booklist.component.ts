import { Component, OnInit } from '@angular/core';
import { Ibook } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  
  books:Ibook[]=[];
  constructor(private _bookService:BookService) {
       
  }
  ngOnInit(): void {
      this._bookService.getBooks()
          .subscribe((data: Ibook[]) => {
              
              console.log(data);
              this.books = data;
          });
  }


}
