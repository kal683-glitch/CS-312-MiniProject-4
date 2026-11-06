import React, {useState} from 'react';

function Post (props){

    function editClick (event){
        if (event !== "event"){
            return (<form action='/editSubmit' method='POST'>
                        <label for='author'>Author:</label><br />
                        <input type='text' name='author' value='<%= currPost.creatorName %>'required></input><br />
                        <label for='blogTitle'>Title:</label><br />
                        <input type='text' name='blogTitle' value='<%= currPost.blogTitle %>'required /><br />
                        <label for='blogTime'>Date:</label><br />
                        <input type='text' name='blogTime' value='<%= currPost.creationTime %>' required /><br />
                        <label for='blogBody'>Body:</label><br />
                        <textarea class="body" type='text' name='blogBody' rows="10" cols="20" required>{event}</textarea><br />
                        <input type="hidden" name='oldBlogTitle' value="<%= currPost.blogTitle %>" />
                        <input type='submit' value='Submit' class="submitButton" />
                    </form>);
        }
    }

    return (
          <div class="card" style={{width: 100 + "%"}}>
              <div class="card-body">
                  <h2 class="card-title">{props.postInfo.title}</h2>
                  <h3 class="card-subtitle mb-2 text-body-secondary">{props.postInfo.name}</h3>
                  <h4>{props.dateTime}</h4>
                  <form action="/delete" method="POST">
                      <input type="hidden" name="cardTitle" value="" />
                      <button class="btn btn-primary btn-sm" id="delete">Delete</button>
                  </form> 
                  <form action="/edit" method="POST">
                      <input type="hidden" name="cardTitle" value="" />
                      <button class="btn btn-primary btn-sm" id="edit">Edit</button>
                  </form>
                  {editClick("event")}
                  <p class="card-text"> {props.postInfo.body}</p>
              </div>
          </div>
    )
}

export default Post;