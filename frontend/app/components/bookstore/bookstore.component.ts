import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {window} from "rxjs/operators";


@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    this.initializeViewer();
  }

  initializeViewer() {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/books/jsapi.js';
    document.body.appendChild(script);

    script.onload = () => {
      (window as any).google.books.load();
      (window as any).google.books.setOnLoadCallback(() => {
        this.loadBook('ISBN:0738531367'); // Replace with the desired ISBN
      });
    };
  }

  loadBook(isbn: string) {
    const viewer = new (window as any).google.books.DefaultViewer(document.getElementById('viewerCanvas'));
    viewer.load(isbn);
  }
  }
