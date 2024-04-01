export class newUserDTO {

  userID;
  userName;
  password;
  birthday;
  status;
  discription;

  constructor(users?:any){
    users = users || {};
    this.userID = users.userID || null;
    this.userName = users.userName || '';
    this.password = users.password || '';
    this.birthday = users.birthday || '';
    this.status = users.status || '';
    this.discription = users.discription || '';
  }
}
