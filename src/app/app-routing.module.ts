import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:"Register",pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'Register',component:RegisterationComponent},
  {path:'Home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
