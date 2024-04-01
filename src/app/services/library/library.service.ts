import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LibraryService implements Resolve<any>{

  onPostChange = new Subject();
  post = new BehaviorSubject({});

  constructor(private httpClient : HttpClient) { }

  resolve(): Observable<any> | Promise<any> | any{
    this.getPosts();
  }

  // getPosts(postSearchRQ: any){
  //   // this.httpClient.get('http://localhost:8080/post/getAllPosts')
  //   //   .subscribe((posts) => {
  //   //     console.log("post : ",posts)
  //   //     this.onPostChange.next(posts);
  //   //   })
  //
  //   // this.httpClient.post('http://localhost:8080/post/getAllPostWithSearch',postSearchRQ)
  //   //   .subscribe((posts) => {
  //   //     console.log("post : ",posts)
  //   //     this.onPostChange.next(posts);
  //   //   })
  //
  // }

  getPosts() {

    const userDetailsString = sessionStorage.getItem('userDetails');

    if (userDetailsString) {
      const userDetails = JSON.parse(userDetailsString);
      const userID = userDetails.userID;


      this.httpClient.get(`http://localhost:8080/post/allPost/${userID}`)
        .subscribe((posts) => {
          //console.log("posts: ", posts);
          this.onPostChange.next(posts);
        });
    } else {

      console.error("User details not found in sessionStorage");
    }
  }
}
