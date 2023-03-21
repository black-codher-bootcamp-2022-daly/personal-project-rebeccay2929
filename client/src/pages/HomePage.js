import { useEffect, useState } from "react"
import Post from "../Post"

export default  function  HomePage(){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
 fetch('http://localhost:8080/post').then(response =>{

    response.json().then(posts=>{
setPosts(posts) 
   });
})
    }, [])
    return ( 
        <>
        {posts.length > 0 && posts.map((post, index) => (
          <Post  key= {index}{...post} />
        ))}
      </>
)}