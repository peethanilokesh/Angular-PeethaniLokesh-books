import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddbookService } from './services/addbook.service';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'list',component:BooklistComponent},
  {path:'login',component:AuthenticationComponent},
  {path:'add',component:AddbookComponent},
  {path:'',redirectTo:'/login', pathMatch:'full' },
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
