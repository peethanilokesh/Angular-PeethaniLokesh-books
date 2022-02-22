import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-PeethaniLokesh-books';
  constructor(private authService:AuthService,private router:Router){}

  isNav(){
    return this.authService.loggedin()
  }
  logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
