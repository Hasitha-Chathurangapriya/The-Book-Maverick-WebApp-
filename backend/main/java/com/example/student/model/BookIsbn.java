package com.example.student.model;

import javax.persistence.*;

@Entity
@Table(name = "t_isbn")
public class BookIsbn {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ISBN_ID",nullable = false,updatable = false)
    private Integer isbnID;

    @Column(name = "ISBN_NUMBER")
    private String isbnNumber;

    @Column(name = "BOOK_NAME")
    private String bookName;

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
