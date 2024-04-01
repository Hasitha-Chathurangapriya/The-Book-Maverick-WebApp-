import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {UserLayoutComponent} from "./components/user-layout/user-layout.component";
import {HomeComponent} from "./components/post/home/home.component";
import {LibraryComponent} from "./components/library/library.component";
import {WishListComponent} from "./components/wish-list/wish-list.component";
import {BookstoreComponent} from "./components/bookstore/bookstore.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {PostService} from "./services/post/post.service";
import {PostAddEditService} from "./services/post/post-add-edit.service";
import {PostAddEditComponent} from "./components/post/post-add-edit/post-add-edit.component";
import {NewUserComponent} from "./components/newUser/new-user/new-user.component";
import {LibraryService} from "./services/library/library.service";
import {BooklistComponent} from "./components/booklist/booklist.component";
import {BookListService} from "./services/book-list/book-list.service";

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path : 'login/newuser',
    component:NewUserComponent
  },
  {
    path:'user',
    component:UserLayoutComponent,
    children:[
      {
        path : 'home',
        component: HomeComponent,
        resolve:{
          data : PostService
        }
      },
      {
        path : 'library',
        component:LibraryComponent,
        resolve:{
          data : LibraryService
        }
      },
      {
        path: 'home/add-edit',
        component: PostAddEditComponent,
        resolve: {
          data : PostAddEditService
        }
      },{
        path: 'library/add-edit',
        component: PostAddEditComponent,
        resolve: {
          data : PostAddEditService
        }
      },
      {
        path: 'wish-list',
        component : WishListComponent
      },
      {
        path : 'bookstore',
        component : BookstoreComponent
      },
      {
        path : 'book-list',
        component : BooklistComponent,
        resolve:{
          data : BookListService
        }
      },
      {
        path : 'profile',
        component : ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
