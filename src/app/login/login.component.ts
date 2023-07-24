import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';
import { LoginDetailsService } from '../service/login-details.service';
import { RegisterationComponent } from '../registeration/registeration.component';
import { NewUser } from '../registeration/NewUser';
import { filter } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uObj:User;

  Registered:NewUser[];
  // router: Router = new Router;

  constructor(private detailsservice:LoginDetailsService,private router:Router )
  {
    this.uObj = new User();
    this.Registered=[];

  }
  ngOnInit(){
    console.log(this.uObj.uname)
    this.detailsservice.getDetails().subscribe(
      ruser=>{this.Registered=ruser
        console.log(this.Registered)


      },
      err=>{console.log(err)}
      
    )
  }
  Register()
  {
    this.router.navigate(['Register']);
  }
  userLogin()
  {
    const details=this.Registered.filter(user=>user.name==this.uObj.uname && user.password==this.uObj.upass);
    console.log(details);
    console.log(this.uObj.upass);
    
    if(details.length!=0)
    {
      alert("Login Successful");
      this.router.navigate(['./Home']);
    }
    else
    {
      alert("Login INVALID");

    }
  }
}