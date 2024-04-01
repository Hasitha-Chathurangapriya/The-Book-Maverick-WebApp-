package com.example.student.model;

import javax.persistence.*;

@Entity
@Table(name = "t_user")
public class UserPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID")
    private Integer userID;

    @Column(name = "USERNAME")
    private String userName;

    @Column(name = "BIRTHDAY")
    private String birthday;

    @Column(name = "STATUS")
    private String status;

    @Column(name = "DISCRIPTION")
    private String discription;

    public Integer getUser_ID() {
        return userID;
    }

    public void setUser_ID(Integer user_ID) {
        this.userID = user_ID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDiscription() {
        return discription;
    }

    public void setDiscription(String discription) {
        this.discription = discription;
    }
}
