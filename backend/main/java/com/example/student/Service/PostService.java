package com.example.student.Service;

import com.example.student.dao.PostDao;
import com.example.student.dao.UserPostDao;
import com.example.student.dao.jdbc.PostJDBCDao;
import com.example.student.dto.PostDTO;
import com.example.student.dto.PostSearchRQ;
import com.example.student.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostDao postDao;

    @Autowired
    private UserPostDao userPostDao;

    @Autowired
    private PostJDBCDao postJDBCDao;

    public PostDTO addNewPost(PostDTO postDTO){

        Post post = null;

        if (postDTO.getPostID() != null){
            post = this.postDao.getById(postDTO.getPostID());
        }else {
            post = new Post();
        }

        post.setPost(postDTO.getPost());
        post.setUser(this.userPostDao.getById(postDTO.getUserID()));
        post.setFeeling(postDTO.getFeeling());
        post.setBookName(postDTO.getBookName());

        post = this.postDao.saveAndFlush(post);

        return new PostDTO(post);
    }

    public List<PostDTO> getAllPost(){
        List<Post> posts = this.postDao.findAll();

        List<PostDTO> postDTOS = new ArrayList<>();
        for (Post post : posts){
            PostDTO postDTO = new PostDTO(post);

            postDTOS.add(postDTO);
        }
        return postDTOS;
    }

    public List<PostDTO> getAllPostWithSearch(PostSearchRQ SearchRQ){
        List<PostDTO> postDTOS = this.postJDBCDao.getAllPostWithSearch(SearchRQ);
        return postDTOS;
    }


    public PostDTO getPostByID(Integer postID){
        Post post = this.postDao.findByPostID(postID);

        return new PostDTO(post);
    }


    public List<PostDTO> getAllPostsByUserID(Integer userID) {
        List<Post> posts = this.postDao.findAllByUser_UserID(userID);

        List<PostDTO> postDTOS = new ArrayList<>();
        for (Post post : posts) {
            PostDTO postDTO = new PostDTO(post);

            postDTOS.add(postDTO);
        }
        return postDTOS;
    }


//    public List<PostDTO> getPostByBookName(String bookName){
//        List<Post> posts = this.postDao.findAllByBookName(bookName);
//
//        List<PostDTO> postDTOS = new ArrayList<>();
//
//        for (Post post : posts){
//            PostDTO postDTO = new PostDTO(post);
//
//            postDTOS.add(postDTO);
//        }
//        return postDTOS;
//    }
}
