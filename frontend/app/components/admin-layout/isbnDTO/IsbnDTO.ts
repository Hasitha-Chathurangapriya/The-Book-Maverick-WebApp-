export class IsbnDTO {

  isbnID;
  isbnNumber;
  bookName;


  constructor(isbns?:any){
    isbns = isbns || {};
    this.isbnID = isbns.isbnID || null;
    this.bookName = isbns.bookName || '';
    this.isbnNumber = isbns.isbnNumber || '';
  }
}
