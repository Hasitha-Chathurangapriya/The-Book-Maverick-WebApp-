import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookListService implements Resolve<any> {

  onISBNChange = new Subject()

  constructor(private httpClient : HttpClient) { }

  resolve(): Observable<any> | Promise<any> | any{
    this.getBookISBN();
  }

  getBookISBN(){
    this.httpClient.get('http://localhost:8080/isbn/getAllIsbn')
      .subscribe((isbns) => {
        console.log("isbns",isbns)
        this.onISBNChange.next(isbns);
      })
  }
}
