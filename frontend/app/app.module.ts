import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/post/home/home.component';
import { LibraryComponent } from './components/library/library.component';
import { BookstoreComponent } from './components/bookstore/bookstore.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostAddEditComponent } from './components/post/post-add-edit/post-add-edit.component';
import { NewUserComponent } from './components/newUser/new-user/new-user.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { AdminLoginComponent } from './components/admin-layout/admin-login/admin-login.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout/admin-layout.component';
import { AdminBookListComponent } from './components/admin-layout/admin-book-list/admin-book-list.component';
import { AdminAddISBNComponent } from './components/admin-layout/admin-add-isbn/admin-add-isbn.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserLayoutComponent,
    HomeComponent,
    LibraryComponent,
    BookstoreComponent,
    ProfileComponent,
    PostAddEditComponent,
    NewUserComponent,
    BooklistComponent,
    AdminLoginComponent,
    AdminLayoutComponent,
    AdminBookListComponent,
    AdminAddISBNComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
