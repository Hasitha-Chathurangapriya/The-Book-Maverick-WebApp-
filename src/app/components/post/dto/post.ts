export class PostDTO {

  postID;
  post;
  feeling;
  userID;
  userName;
  bookName;

  constructor(posts?:any){
    posts = posts || {};
    this.postID = posts.postID || null;
    this.bookName = posts.bookName || '';
    this.post = posts.post || '';
    this.feeling = posts.feeling || '';
    this.userID = posts.userID || null;
    this.userName = posts.userName || '';
  }
}
