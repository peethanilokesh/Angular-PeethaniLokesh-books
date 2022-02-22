import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ilogin } from 'src/app/Models/login';
import { AuthService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }
  loginDetails:Ilogin={
    UserName:'',
    Password:''
  }
  ngOnInit(): void {
  }
  login(){
    this.authservice.login(this.loginDetails).subscribe(res=>{
      localStorage.setItem('token',res.token)
      this.router.navigate(['/home'])
    })
  }

}
