import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'list',component:BooklistComponent},
  {path:'',redirectTo:'/home', pathMatch:'full' },
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
