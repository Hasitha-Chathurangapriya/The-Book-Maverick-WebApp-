package com.example.student.Service;

import com.example.student.dao.UserPostDao;
import com.example.student.dto.UserPostDTO;
import com.example.student.model.UserPost;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserPostService {

    @Autowired
    private UserPostDao userPostDao;

    public UserPostDTO addUser(UserPostDTO userPostDTO){
        UserPost user = new UserPost();

        user.setUserName(userPostDTO.getUserName());
        user.setBirthday(userPostDTO.getBirthday());
        user.setStatus(userPostDTO.getStatus());
        user.setDiscription(userPostDTO.getDiscription());

        user = this.userPostDao.saveAndFlush(user);

        return new UserPostDTO(user);
    }

    public List<UserPostDTO> getAllUsers(){
        List<UserPost> users = this.userPostDao.findAll();

        List<UserPostDTO> userPostDTOS = new ArrayList<>();

        for (UserPost user : users){
            UserPostDTO userPostDTO = new UserPostDTO(user);
            userPostDTOS.add(userPostDTO);
        }
        return userPostDTOS;
    }

    public UserPostDTO getUserByID(Integer userID){
        UserPost user = this.userPostDao.findByUserID(userID);
        return new UserPostDTO(user);
    }
}
