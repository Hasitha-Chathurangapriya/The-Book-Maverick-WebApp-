import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostAddEditService implements Resolve<any>{

  post = new BehaviorSubject({});
  onFeelingChanged = new Subject();

  constructor(private httpClient : HttpClient) { }

  resolve(): Observable<any> | Promise<any> | any {
    this.getPostByID();
    this.getAllFeeling();
  }

  getPostByID(){
    //console.log("Call getPostByID")

    let postID = sessionStorage.getItem("postID");

    //console.log("getPostByID : ",postID)
    if(postID != null){
      this.httpClient.get(`http://localhost:8080/post/getPostByID/${postID}`)
        .subscribe((post) => {
          //console.log("Post : ",post)
          this.post.next(post);
        })
    }else {
      //console.log("Post ID null")
      this.post.next({});

    }
  }



  getAllFeeling(){
    this.httpClient.get('http://localhost:8080/post/getAllPosts')
      .subscribe((feelings) => {
        //console.log("departments",departments)
        this.onFeelingChanged.next(feelings);
      })
  }

  savePost(data:any){
    this.httpClient.post('http://localhost:8080/post/addNewPost',data)
      .subscribe((post) => {
        this.post.next(post);
        alert("Data are saved !")
      })
  }

}

