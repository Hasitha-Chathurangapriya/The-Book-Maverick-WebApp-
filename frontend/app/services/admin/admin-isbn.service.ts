import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Resolve} from "@angular/router";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminISBNService implements Resolve<any>{

  isbn = new BehaviorSubject({});
onDepartmentsChanged = new Subject();

constructor(private httpClient : HttpClient) { }

resolve(): Observable<any> | Promise<any> | any {

}


  savePost(data:any){
    this.httpClient.post('http://localhost:8080/isbn/addNewIsbn',data)
      .subscribe((isbn) => {
        this.isbn.next(isbn);
        alert("Data are saved !")
      })
  }

}
