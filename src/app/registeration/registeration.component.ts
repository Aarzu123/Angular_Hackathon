import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { NewUser } from './NewUser';
import { LoginDetailsService } from '../service/login-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})

export class RegisterationComponent {
  rObj:NewUser;
  constructor(private detailsservice:LoginDetailsService,private router:Router )
  {
    this.rObj = new NewUser();
  }

  userRegister(RegisterForm:NgForm)
  {

    this.rObj = RegisterForm.value;
    if(RegisterForm.valid){
      this.detailsservice.addDetails(this.rObj).subscribe(
        data => {console.log(data)},
         err => {console.log(err)}
         )
         alert("Registered Successfully!!!")
        this.router.navigate(['login']);
   
      console.log(this.rObj.name);
      console.log(this.rObj.password);
      console.log(this.rObj.email);
      console.log(this.rObj.mobileNo);
      console.log(this.rObj.address);
      console.log(this.rObj.accountNo);

      
    }

  }
 }
