import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LibraryService} from "../../services/library/library.service";
import {PostService} from "../../services/post/post.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit{

  posts:any = [];
  userID: number | null;
  userDetails : any ={};
  postSearchForm : FormGroup;



  constructor(private libraryService : LibraryService,
              private router : Router){}

  ngOnInit(): void {

    // let user = sessionStorage.getItem('userID');
    // if (user != null){
    //   this.libraryService.getPosts(user);
    // }else {
    //   console.log("Errorrr !")
    // }

    this.libraryService.onPostChange.subscribe((posts) =>{
      //console.log("Posts : ",posts)
      this.posts = posts;
    });

  }

  getPosts(){
    // let userID = sessionStorage.getItem("userID");
    // if (userID != null){
    //   this.userDetails = JSON.parse(userID);
    //   this.libraryService.getPosts(userID);
    // }
  }


  addEditPost(post:any){
    //console.log("Post : ",post)

    if (post != null){
      sessionStorage.setItem('postID',post.postID);
    }else{
      sessionStorage.removeItem("postID");
    }

    this.router.navigate(['/user/library/add-edit'])
  }

}
