import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '../registeration/NewUser';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailsService {

  constructor(private httpclient:HttpClient) { }
  getDetails():Observable<NewUser[]>{
      return this.httpclient.get<NewUser[]>(" http://localhost:3000/Details");
  }
  
  addDetails(noteObj:NewUser)
  {
    return this.httpclient.post<NewUser>("http://localhost:3000/Details",noteObj);
  }
}
