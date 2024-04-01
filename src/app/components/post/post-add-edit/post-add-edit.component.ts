import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {PostAddEditService} from "../../../services/post/post-add-edit.service";
import {PostDTO} from "../dto/post";
import * as _ from 'underscore';
import {Location} from "@angular/common";

@Component({
  selector: 'app-post-add-edit',
  templateUrl: './post-add-edit.component.html',
  styleUrls: ['./post-add-edit.component.css']
})
export class PostAddEditComponent implements OnInit,OnDestroy{

  postForm : FormGroup;
  post = new PostDTO();
  pageType : string;
  feeling : any = [];
  onPostChangeSub = new Subscription();
  userDetails : any ={};

  constructor(private postAddEditService : PostAddEditService,
              private fb : FormBuilder,
              private location : Location){}

  ngOnInit(): void {

    let user = sessionStorage.getItem('userDetails');
    if (user != null){
      this.userDetails = JSON.parse(user);
    }

    this.postAddEditService.onFeelingChanged
      .subscribe((feeling) => {
        //console.log("feeling",feeling)
        this.feeling = feeling;
      })

    this.onPostChangeSub = this.postAddEditService.post.subscribe((post) => {
      if (!_.isEmpty(post)){
        this.post = new PostDTO(post);
        this.pageType ='edit';
      } else {
        this.post = new PostDTO(post);
        this.pageType = 'new'
      }
      //console.log("yyyy : ",this.student)
      this.postForm = this.createForm();
    })
  }

  ngOnDestroy(): void {
    this.onPostChangeSub.unsubscribe();
  }

  createForm(){
    return this.fb.group({
      postID: [this.post.postID],
      bookName: [this.post.bookName],
      post: [this.post.post, [Validators.required]],
      feeling : [this.post.feeling,[Validators.required]],
      userID : [this.userDetails.userID]
    })
  }

  isValid(){
    return this.postForm.valid;
  }

  isDirty(){
    return this.postForm.dirty;
  }

  savaData(){
    let data = this.postForm.getRawValue();

    //console.log("data",data)

    this.postAddEditService.savePost(data);
  }

  goBack(){
    this.location.back();
  }

}
