import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import * as _ from 'underscore';
import {newUserDTO} from "../dto/newUserDTO";
import {NewUserService} from "../../../services/user/new-user.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit,OnDestroy{

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
      userID: [this.user.userID],
      userName: [this.user.userName,[Validators.required]],
      password : [this.user.password,[Validators.required]],
      birthday : [this.user.birthday,[Validators.required]],
      status : [this.user.status,[Validators.required]],
      discription : [this.user.discription,[Validators.required]]
    })
  }

  isValid(){
    return this.newUserForm.valid;
  }

  savaData(){
    let data = this.newUserForm.getRawValue();
    let data1 = this.newUserForm.getRawValue();

    //console.log("data",data)

    this.newUserService.saveUser(data);
    this.newUserService.saveUser1(data1);
  }

}
