package com.example.student.controller;

import com.example.student.Service.PostService;
import com.example.student.dto.PostDTO;
import com.example.student.dto.PostSearchRQ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostService postService;

    @RequestMapping(value = "/getAllPosts",method = RequestMethod.GET)
    public ResponseEntity<List<PostDTO>> getAllPosts(){
        List<PostDTO> postDTOS = this.postService.getAllPost();

        return new ResponseEntity<>(postDTOS, HttpStatus.OK);
    }

    @RequestMapping(value = "/getAllPostWithSearch",method = RequestMethod.POST)
    public ResponseEntity<List<PostDTO>> getAllPostWithSearch(@RequestBody PostSearchRQ searchRQ){
        List<PostDTO> posts = this.postService.getAllPostWithSearch(searchRQ);

        return new ResponseEntity<>(posts,HttpStatus.OK);
    }

    @RequestMapping(value = "/addNewPost",method = RequestMethod.POST)
    public ResponseEntity<PostDTO> addNewPost(@RequestBody PostDTO postDTO){
        PostDTO newPost = this.postService.addNewPost(postDTO);

        return new ResponseEntity<>(newPost,HttpStatus.CREATED);
    }

    @RequestMapping(value = "/getPostByID/{postID}",method = RequestMethod.GET)
    public ResponseEntity<PostDTO> getPostByID(@PathVariable Integer postID){
        PostDTO post = this.postService.getPostByID(postID);

        return new ResponseEntity<>(post,HttpStatus.OK);
    }

    @GetMapping("/allPost/{userID}")
    public List<PostDTO> getPostsByUserID(@PathVariable Integer userID) {
        List<PostDTO> posts = postService.getAllPostsByUserID(userID);
        return posts;
    }

}
