import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Observable} from "rxjs";
import {Resolve} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NewUserService implements Resolve<any>{

  newUser = new BehaviorSubject({});
  newLoginUser = new BehaviorSubject({});


  constructor(private httpClient : HttpClient) { }

  resolve(): Observable<any> | Promise<any> | any {
    this.getUserByID();
  }


  getUserByID(){
    //console.log("Call getUserByID")

    let userID = sessionStorage.getItem("userID");

    //console.log("getPostByID : ",userID)
    if(userID != null){
      this.httpClient.get(`http://localhost:8080/postUser/getUserByID/${userID}`)
        .subscribe((newUser) => {
          //console.log("User : ",user)
          this.newUser.next(newUser);
        })
    }else {
      //console.log("Post ID null")
      this.newUser.next({});
    }
  }


  saveUser(data:any){
    this.httpClient.post('http://localhost:8080/postUser/addUser',data)
      .subscribe((newUser) => {
        this.newUser.next(newUser);
        alert("Data are saved !");
      })
  }

  saveUser1(data1:any){
    this.httpClient.post('http://localhost:8080/user/addNewLoginUser',data1)
      .subscribe((newLoginUser) => {

        if (data1 != null){
          this.newLoginUser.next(newLoginUser);
          alert("Data are saved !")
        }else {
          alert("This user have system $ ")
        }
      })
  }
}
