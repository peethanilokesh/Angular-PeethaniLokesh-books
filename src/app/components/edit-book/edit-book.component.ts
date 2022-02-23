import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAddBook } from 'src/app/Models/Addbook';
import { EditService } from 'src/app/services/editbook.service';
import { SharedService } from 'src/app/services/shareddata.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private sharedservice:SharedService,private editservice:EditService,private router:Router) { }
  formDetails:IAddBook={
    bookName:'',
    description:'',
    amount:0,
    author:''
  }
  id:number=0;
  ngOnInit(): void {
    this.formDetails=this.sharedservice.sharedData
    this.id=this.sharedservice.sharedData.bookId
  }
  edit(){
    this.editservice.editbook(this.formDetails,this.id).subscribe(res=>{
      this.router.navigate(['/list'])
    })
  }
}
