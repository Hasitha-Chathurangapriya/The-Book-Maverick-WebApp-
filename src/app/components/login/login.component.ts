import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm : FormGroup;

  constructor(private authService : AuthService,
              private router : Router,
              private fb : FormBuilder){}

  ngOnInit(): void {

    this.authService.loginStatus.subscribe((userDetails)=> {
      //console.log("loginStatus : "+loginStatus)
      if (userDetails){
        this.router.navigate(['/user/home']);
        sessionStorage.setItem('userDetails', JSON.stringify(userDetails))
      } else {
        alert("Authentication Fail")
        //console.log("Authentication Fail")
      }
    });

    this.loginForm = this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onLogin(){
    //console.log("Click")
    //this.authService.login(false);
    let data = this.loginForm.getRawValue();

    // if (data.username == "Hasitha" && data.password == "123"){
    //   this.authService.login(true);
    // }else {
    //   this.authService.login(false);
    // }

     //console.log("Data : ",data)
    this.authService.login(data);
  }

  isValid(){
    return this.loginForm.valid;
  }

}
