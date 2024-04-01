import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Resolve} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PostService implements Resolve<any>{

  onPostChange = new Subject();

  constructor(private httpClient : HttpClient) { }

  resolve(): Observable<any> | Promise<any> | any{
    this.getPosts({});
  }

  getPosts(postSearchRQ: any){
    // this.httpClient.get('http://localhost:8080/post/getAllPosts')
    //   .subscribe((posts) => {
    //     console.log("post : ",posts)
    //     this.onPostChange.next(posts);
    //   })

    this.httpClient.post('http://localhost:8080/post/getAllPostWithSearch',postSearchRQ)
      .subscribe((posts) => {
        console.log("post : ",posts)
        this.onPostChange.next(posts);
      })
  }
}
