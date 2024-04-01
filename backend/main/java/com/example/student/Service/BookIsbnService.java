package com.example.student.Service;

import com.example.student.dao.BookIsbnDao;
import com.example.student.dto.BookIsbnDTO;
import com.example.student.model.BookIsbn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookIsbnService {

    @Autowired
    private BookIsbnDao bookIsbnDao;

    public BookIsbnDTO addIsbn(BookIsbnDTO bookIsbnDTO){
        BookIsbn isbn = new BookIsbn();

        isbn.setBookName(bookIsbnDTO.getBookName());
        isbn.setIsbnNumber(bookIsbnDTO.getIsbnNumber());

        isbn = this.bookIsbnDao.saveAndFlush(isbn);

        return new BookIsbnDTO(isbn);
    }

    public List<BookIsbnDTO> getAllIsbn(){
        List<BookIsbn> isbns = this.bookIsbnDao.findAll();

        List<BookIsbnDTO> bookIsbnDTOS = new ArrayList<>();
        for (BookIsbn bookIsbn : isbns){
            BookIsbnDTO bookIsbnDTO = new BookIsbnDTO(bookIsbn);
            bookIsbnDTOS.add(bookIsbnDTO);
        }
        return bookIsbnDTOS;
    }
}
