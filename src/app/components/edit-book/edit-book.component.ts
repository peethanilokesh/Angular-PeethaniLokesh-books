import { Component, OnInit } from '@angular/core';
import { IAddBook } from 'src/app/Models/Addbook';
import { SharedService } from 'src/app/services/shareddata.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private sharedservice:SharedService) { }
  formDetails:IAddBook={
    bookName:'',
    description:'',
    amount:0,
    author:''
  }
  ngOnInit(): void {
    this.formDetails=this.sharedservice.sharedData
  }
  edit(){
    
  }
}
