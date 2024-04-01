import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {newUserDTO} from "../newUser/dto/newUserDTO";
import {NewUserService} from "../../services/user/new-user.service";
import {Subscription} from "rxjs";
import * as _ from 'underscore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy{

  newUserForm : FormGroup;
  user = new newUserDTO();
  onNewUserChangeSub = new Subscription();
  pageType : string;
  userDetails : any ={};


  constructor(private newUserService : NewUserService,
              private fb : FormBuilder){}

  ngOnInit(): void {

    let user = sessionStorage.getItem('userDetails');
    if (user != null){
      this.userDetails = JSON.parse(user);
    }
    //console.log('user', JSON.parse(user))

    this.onNewUserChangeSub = this.newUserService.newUser.subscribe((user) => {
      if (!_.isEmpty(user)){
        this.user = new newUserDTO(user);
        this.pageType ='edit';
      } else {
        this.user = new newUserDTO(user);
        this.pageType = 'new'
      }
      //console.log("yyyy : ",this.student)
      this.newUserForm = this.createForm();
    })
  }

  ngOnDestroy(): void {
    this.onNewUserChangeSub.unsubscribe();
  }

  createForm(){
    return this.fb.group({
      userID: [this.userDetails.userID],
      userName: [this.userDetails.userName,[Validators.required]],
      password : [this.userDetails.password,[Validators.required]],
      status : [this.userDetails.status,[Validators.required]]
    })
  }

  isValid(){
    return this.newUserForm.valid;
  }

  isDirty(){
    return this.newUserForm.dirty;
  }

  savaData(){

    let data1 = this.newUserForm.getRawValue();

    //console.log("data",data)


    this.newUserService.saveUser1(data1);
  }
}
