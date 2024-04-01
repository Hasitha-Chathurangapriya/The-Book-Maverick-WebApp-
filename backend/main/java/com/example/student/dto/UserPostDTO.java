package com.example.student.dto;

import com.example.student.model.UserPost;

public class UserPostDTO {
    private Integer userID;

    private String userName;

    private String birthday;

    private String status;

    private String discription;

    public UserPostDTO() {
    }

    public UserPostDTO(UserPost user) {
        this.userID = user.getUser_ID();
        this.userName = user.getUserName();
        this.birthday = user.getBirthday();
        this.status = user.getStatus();
        this.discription = user.getDiscription();
    }

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

