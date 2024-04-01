import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {UserLayoutComponent} from "./components/user-layout/user-layout.component";
import {HomeComponent} from "./components/post/home/home.component";
import {LibraryComponent} from "./components/library/library.component";
import {BookstoreComponent} from "./components/bookstore/bookstore.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {PostService} from "./services/post/post.service";
import {PostAddEditService} from "./services/post/post-add-edit.service";
import {PostAddEditComponent} from "./components/post/post-add-edit/post-add-edit.component";
import {NewUserComponent} from "./components/newUser/new-user/new-user.component";
import {LibraryService} from "./services/library/library.service";
import {BooklistComponent} from "./components/booklist/booklist.component";
import {BookListService} from "./services/book-list/book-list.service";
import {AdminLoginComponent} from "./components/admin-layout/admin-login/admin-login.component";
import {AdminLayoutComponent} from "./components/admin-layout/admin-layout/admin-layout.component";
import {AdminBookListComponent} from "./components/admin-layout/admin-book-list/admin-book-list.component";
import {AdminAddISBNComponent} from "./components/admin-layout/admin-add-isbn/admin-add-isbn.component";
import {AdminISBNService} from "./services/admin/admin-isbn.service";

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
  },
  {
    path : 'adminLogin',
    component:AdminLoginComponent
  },
  {
    path:'admin',
    component:AdminLayoutComponent,
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
        path : 'bookstore',
        component : BookstoreComponent
      },
      {
        path : 'book-list',
        component : AdminBookListComponent,
        resolve:{
          data : BookListService
        },
      },
      {
        path : 'addISBN',
        component : AdminAddISBNComponent,
        resolve:{
          data : AdminISBNService
        },
      },
      {
        path : 'profile',
        component : ProfileComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
