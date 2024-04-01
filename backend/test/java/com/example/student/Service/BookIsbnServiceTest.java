package com.example.student.Service;

import com.example.student.dto.BookIsbnDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class BookIsbnServiceTest {

    @Autowired
    private BookIsbnService bookIsbnService;

    @Test
    void addIsbn() {
        BookIsbnDTO isbn = new BookIsbnDTO();
        isbn.setBookName("The Lord of the Rings");
        isbn.setIsbnNumber("9781904764823");

        bookIsbnService.addIsbn(isbn);
    }

    @Test
    void getAllIsbn() {
        this.bookIsbnService.getAllIsbn();
    }
}