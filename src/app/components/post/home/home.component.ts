import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../services/post/post.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  posts:any = [];
  userID: number | null;
  postSearchForm : FormGroup;


  constructor(private postService : PostService,
              private router : Router,
              private fb : FormBuilder){}

  ngOnInit(): void {
    this.postService.onPostChange.subscribe((posts) =>{
      //console.log("Students : ",students)
      this.posts = posts;
    });

    this.postSearchForm = this.fb.group({
      bookName : ['']
    })
  }

  getPosts(){
    this.postService.getPosts({});
  }

  addEditPost(post:any){
    //console.log("Post : ",post)

    if (post != null){
      sessionStorage.setItem('postID',post.postID);
    }else{
      sessionStorage.removeItem("postID");
    }

    this.router.navigate(['/user/home/add-edit'])
  }

  onSearch(){
    let data = this.postSearchForm.getRawValue();

    //console.log('data',data)
    this.postService.getPosts(data)
  }

  onClear(){
    this.postSearchForm.setValue({
      bookName : ''
    });
    this.onSearch();
  }

}
