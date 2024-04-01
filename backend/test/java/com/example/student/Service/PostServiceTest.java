package com.example.student.Service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PostServiceTest {

    @Autowired
    private PostService postService;

//    @Test
//    void getPostByBookName() {
//        this.postService.getPostByBookName("Nil katharoal");
//    }


    @Test
    void getPostByID() {
        this.postService.getPostByID(1);
    }
}