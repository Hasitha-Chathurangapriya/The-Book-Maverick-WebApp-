package com.example.student.model;

import javax.persistence.*;

@Entity
@Table(name = "t_user_login")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_LOGIN_ID",updatable = false,nullable = false)
    private Integer userID;

    @Column(name = "USER_LOGIN_NAME")
    private String userName;

    @Column(name = "LOGIN_PASSWORD")
    private String password;

    @Column(name = "LOGIN_STATUS")
    private String status;

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
