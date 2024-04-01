package com.example.student.Service;

import com.example.student.dao.UserDao;
import com.example.student.dto.LoginRQ;
import com.example.student.dto.UserDTO;
import com.example.student.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    public UserDTO getLoggedUser(LoginRQ loginRQ){
        User user = this.userDao.findByUserNameAndPassword(loginRQ.getUserName(),loginRQ.getPassword());

        UserDTO userDTO = null;

        if (user != null){
            userDTO = new UserDTO(user);
        }
        return userDTO;
    }

    public UserDTO addNewUser(UserDTO userDTO){

        User user = null;
        boolean isNew = userDTO.getUserID() == null;
        boolean isExisting = false;

        if (!isNew){
            user = this.userDao.getById(userDTO.getUserID());
        }else {
            user = new User();
        }

        if (isNew || !userDTO.getUserName().equals(user.getUserName())){
            if (this.userDao.findByUserName(userDTO.getUserName()) != null){
                isExisting = true;
            }
        }

        if (!isExisting){
            user.setUserName(userDTO.getUserName());
            user.setPassword(userDTO.getPassword());
            user.setStatus(userDTO.getStatus());

            user = this.userDao.saveAndFlush(user);

            return new UserDTO(user);
        }else {
            return null ;
        }

    }
}
