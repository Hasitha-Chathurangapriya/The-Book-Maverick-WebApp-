package com.example.student.controller;

import com.example.student.Service.UserPostService;
import com.example.student.dto.UserPostDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/postUser")
public class UserPostController {

    @Autowired
    private UserPostService userPostService;

    @RequestMapping(value = "/getAllUsers",method = RequestMethod.GET)
    public ResponseEntity<List<UserPostDTO>> getAllUsers(){
        List<UserPostDTO> users = this.userPostService.getAllUsers();

        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @RequestMapping(value = "/addUser")
    public ResponseEntity<UserPostDTO> addUser(@RequestBody UserPostDTO userPostDTO){
        UserPostDTO newUser = this.userPostService.addUser(userPostDTO);

        return new ResponseEntity<>(newUser,HttpStatus.CREATED);
    }

    @RequestMapping(value = "/getUserByID/{userID}")
    public ResponseEntity<UserPostDTO> getUserByID(@PathVariable Integer userID){
        UserPostDTO user = this.userPostService.getUserByID(userID);

        return new ResponseEntity<>(user,HttpStatus.OK);
    }
}
