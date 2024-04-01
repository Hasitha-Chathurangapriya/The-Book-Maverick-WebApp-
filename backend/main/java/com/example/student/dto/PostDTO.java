package com.example.student.dto;

import com.example.student.model.Post;

public class PostDTO {

    private Integer postID;

    private String post;

    private String userName;

    private Integer userID;

    private String feeling;

    private String bookName;

    public PostDTO() {
    }

    public PostDTO(Post post) {
        this.postID = post.getPostID();
        this.post = post.getPost();
        this.feeling = post.getFeeling();
        this.bookName = post.getBookName();

        if (post.getPost() != null){
            this.userName = post.getUser().getUserName();
            this.userID = post.getUser().getUser_ID();
        }
    }

    public Integer getPostID() {
        return postID;
    }

    public void setPostID(Integer postID) {
        this.postID = postID;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFeeling() {
        return feeling;
    }

    public void setFeeling(String feeling) {
        this.feeling = feeling;
    }

    public String getUserName() {
        return userName;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }
}
