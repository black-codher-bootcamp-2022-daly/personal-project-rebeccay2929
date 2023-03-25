import { useEffect, useState } from "react";
import Post from "../Post";
import Sidebar from "../Sidebar";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <> 
    <div className="home">
      <div className ="posts" >  
      {posts.length > 0 &&
        posts.map((post, index) => <Post  key={index} {...post} />)}
    </div>
    <Sidebar/> 
       </div>    

    </>
  );
}  
