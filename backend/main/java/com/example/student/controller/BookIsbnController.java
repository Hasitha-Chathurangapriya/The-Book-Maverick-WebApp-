package com.example.student.controller;

import com.example.student.Service.BookIsbnService;
import com.example.student.dto.BookIsbnDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/isbn")
public class BookIsbnController {

    @Autowired
    private BookIsbnService bookIsbnService;

    @RequestMapping(value = "/getAllIsbn",method = RequestMethod.GET)
    public ResponseEntity<List<BookIsbnDTO>> getAllIsbn(){
        List<BookIsbnDTO> bookIsbnDTOS = this.bookIsbnService.getAllIsbn();

        return new ResponseEntity<>(bookIsbnDTOS, HttpStatus.OK);
    }

    @RequestMapping(value = "/addNewIsbn",method = RequestMethod.POST)
    public ResponseEntity<BookIsbnDTO> addNewIsbn(@RequestBody BookIsbnDTO bookIsbnDTO){
        BookIsbnDTO newIsbn = this.bookIsbnService.addIsbn(bookIsbnDTO);

        return new ResponseEntity<>(newIsbn,HttpStatus.CREATED);
    }
}
