package com.example.student.dao;

import com.example.student.model.BookIsbn;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookIsbnDao extends JpaRepository<BookIsbn,Integer> {

}
