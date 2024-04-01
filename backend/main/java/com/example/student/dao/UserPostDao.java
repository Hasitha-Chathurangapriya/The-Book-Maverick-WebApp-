package com.example.student.dao;

import com.example.student.model.UserPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPostDao extends JpaRepository<UserPost,Integer> {

    UserPost findByUserID(Integer userID);
}
