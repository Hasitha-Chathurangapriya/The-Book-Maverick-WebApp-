package com.example.student.dao.jdbc;

import com.example.student.dto.PostDTO;
import com.example.student.dto.PostSearchRQ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class PostJDBCDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<PostDTO> getAllPostWithSearch(PostSearchRQ searchRQ){
        List<PostDTO> result = new ArrayList<>();
        Map<String,Object> params = new HashMap<>();

        StringBuilder SQL = new StringBuilder();
        SQL.append("select								\n");
        SQL.append("	tp.POST_ID,						\n");
        SQL.append("	tp.POST,						\n");
        SQL.append("	tp.FEELING,						\n");
        SQL.append("	tp.BOOK_NAME,					\n");
        SQL.append("	tp.USER_ID, 					\n");
        SQL.append("	tul.USER_LOGIN_NAME				\n");
        SQL.append("from								\n");
        SQL.append("	t_post tp						\n");
        SQL.append("left join t_user_login tul 			\n");
        SQL.append("on									\n");
        SQL.append("	tp.USER_ID = tul.USER_LOGIN_ID  \n");
        SQL.append("where tp.POST_ID is not null        \n");

        if(searchRQ.getBookName() != null && !searchRQ.getBookName().equals("")){
            SQL.append(" and tp.BOOK_NAME like '%"+searchRQ.getBookName()+"%'		    \n");
        }

        if (searchRQ.getUserID() != null && !searchRQ.getUserID().equals("")){
            SQL.append("	and tp.USER_ID = '%"+searchRQ.getUserID()+"%';	    	\n");
        }

        return namedParameterJdbcTemplate.query(SQL.toString(), params, new ResultSetExtractor<List<PostDTO>>() {
            @Override
            public List<PostDTO> extractData(ResultSet rs) throws SQLException, DataAccessException {
                while (rs.next()){
                    PostDTO postDTO = new PostDTO();
                    postDTO.setPostID(rs.getInt("POST_ID"));
                    postDTO.setPost(rs.getString("POST"));
                    postDTO.setFeeling(rs.getString("FEELING"));
                    postDTO.setBookName(rs.getString("BOOK_NAME"));
                    postDTO.setUserID(rs.getInt("USER_ID"));
                    postDTO.setUserName(rs.getString("USER_LOGIN_NAME"));

                    result.add(postDTO);
                }
                return result;
            }
        });
    }
}
