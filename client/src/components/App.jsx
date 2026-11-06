import Post from './post';
import axios from "axios";
import { useState, useEffect } from "react";

function App() {

  // const [posts, setPosts] = useState(["Hiiii!!!"]);
  const [postArray, setPostArray] = useState([{}]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
      fetch("http://localhost:5000/posts").then(
        response => response.json()
      ).then(
        data => {
          setPostArray(data)
        }
      )
    }, [])

   function handleForm(event){
    event.preventDefault()
    const date = new Date();

    let posts = {
    title: title,
    name: author,
    time: date,
    body: body};

    fetch("http://localhost:5000/submit", {
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(posts)
    }).then(response=>response.json()).then(data=>{
      console.log(data)
    })

    console.log("Clicked");
   }
  return (
    <div>
      <h1>Hii!!! Here are your posts</h1>
      <form onSubmit={handleForm}>
          <label for="author">Author:</label><br />
          <input type="text" name="author" onChange={e=>setAuthor(e.target.value)}required /><br /><br />
          <label for="blogTitle">Title:</label><br /><object data="" type=""></object>
          <input type="text" name="blogTitle" onChange={e=>setTitle(e.target.value)} required /><br /><br />
          <label for="blogBody">Body:</label><br />
          <textarea class="body" type="text" name="blogBody" rows="20" cols="30" onChange={e=>setBody(e.target.value)}required></textarea><br />
          <input type="submit" value="Submit" class="submitButton" />
      </form> 
      <button>Message</button> 
      {postArray.map((post) =>{
        return <Post postInfo={post}/>;
      })}
      
      {/* <o
      link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"></o> */}
    </div>
  );
}

export default App;