import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus = new Subject();

  constructor(private httpClient : HttpClient) { }

  // login(status : boolean){
  //   // setTimeout(()=>{
  //   //   this.loginStatus.next(status);
  //   // },1000);
  // }

  login(loginRQ:any){
    this.httpClient.post('http://localhost:8080/user/getLoggedUser',loginRQ)
      .subscribe((userDetails) => {
        console.log("userDetails", userDetails)

        if (userDetails != null){
          this.loginStatus.next(userDetails);
        }

      });
  }
}
