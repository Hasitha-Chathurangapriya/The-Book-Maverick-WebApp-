import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {IsbnDTO} from "../isbnDTO/IsbnDTO";
import {AdminISBNService} from "../../../services/admin/admin-isbn.service";

@Component({
  selector: 'app-admin-add-isbn',
  templateUrl: './admin-add-isbn.component.html',
  styleUrls: ['./admin-add-isbn.component.css']
})
export class AdminAddISBNComponent implements OnInit{

  isbnForm : FormGroup;
  isbn = new IsbnDTO();

  constructor(private adminISBNService : AdminISBNService,
              private fb : FormBuilder,
              private location : Location){}

  ngOnInit(): void {
    this.isbnForm = this.createForm();
  }


  createForm(){
    return this.fb.group({
      isbnID: [this.isbn.isbnID],
      isbnNumber: [this.isbn.isbnNumber,[Validators.required]],
      bookName: [this.isbn.bookName, [Validators.required]],
    })
  }

  isValid(){
    return this.isbnForm.valid;
  }


  savaData(){
    let data = this.isbnForm.getRawValue();

    //console.log("data",data)

    this.adminISBNService.savePost(data);
  }

  goBack(){
    this.location.back();
  }
}
