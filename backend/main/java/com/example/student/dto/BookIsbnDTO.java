package com.example.student.dto;

import com.example.student.model.BookIsbn;

public class BookIsbnDTO {

    private Integer isbnID;

    private String isbnNumber;

    private String bookName;

    public BookIsbnDTO() {
    }

    public BookIsbnDTO(BookIsbn bookIsbn) {
        this.isbnID = bookIsbn.getIsbnID();
        this.isbnNumber = bookIsbn.getIsbnNumber();
        this.bookName = bookIsbn.getBookName();
    }

    public Integer getIsbnID() {
        return isbnID;
    }

    public void setIsbnID(Integer isbnID) {
        this.isbnID = isbnID;
    }

    public String getIsbnNumber() {
        return isbnNumber;
    }

    public void setIsbnNumber(String isbnNumber) {
        this.isbnNumber = isbnNumber;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }
}
