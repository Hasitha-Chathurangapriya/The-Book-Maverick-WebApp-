import {Component, OnInit} from '@angular/core';
import {BookListService} from "../../services/book-list/book-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit{

  isbns:any = [];

  constructor(private bookListService : BookListService,
              private router : Router){}


  ngOnInit(): void {
    this.bookListService.onISBNChange.subscribe((isbns) =>{
      //console.log("Students : ",students)
      this.isbns = isbns;
    })
  }

  getBookISBN(){
    this.bookListService.getBookISBN();
  }
}
