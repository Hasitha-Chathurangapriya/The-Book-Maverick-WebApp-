import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit{

  userDetails : any ={};

  constructor(private router : Router){}

  ngOnInit(){
    let user = sessionStorage.getItem('userDetails');
    if (user != null){
      this.userDetails = JSON.parse(user);
    }
    //console.log('user', JSON.parse(user))
  }

  logout(){
    this.router.navigate(['/login']);
    sessionStorage.removeItem('userDetails')
    sessionStorage.removeItem('userID')
    sessionStorage.removeItem('postID')
  }
}
