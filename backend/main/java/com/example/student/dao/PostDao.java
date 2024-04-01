package com.example.student.dao;

import com.example.student.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostDao extends JpaRepository<Post,Integer > {
    Post findByPostID(Integer postID);

//    List<Post> findAllByBookName(String bookName);

    List<Post> findAllByUser_UserID(Integer userID);
}
