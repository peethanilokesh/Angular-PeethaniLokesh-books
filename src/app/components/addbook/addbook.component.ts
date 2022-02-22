import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAddBook } from 'src/app/Models/Addbook';
import { AddbookService } from 'src/app/services/addbook.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private addservice:AddbookService,private router:Router) { }

  ngOnInit(): void {
  }
  formDetails:IAddBook={
    bookName:'',
    description:'',
    amount:0,
    author:''
  }
  add(){
    this.addservice.addBook(this.formDetails).subscribe(res=>{
      this.router.navigate(['/list'])
    })
  }
}
