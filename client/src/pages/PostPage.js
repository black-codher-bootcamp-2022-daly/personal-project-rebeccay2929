import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time> {formatISO9075(new Date(postInfo.createdAt))}</time>

      <div className=" edit"> </div>
      <div className="edit-row">
        <a className="edit-btn" href="">
          Edit this post
        </a>
      </div>
{/* 
{userInfo.id === postInfo._id && (
        <div className="edit-row">
          <a className="edit-btn" to={`/edit/${postInfo._id}`}>
            Edit this post
          </a>
        </div>
      )} */}



      <div className="image">
        <img src={`http://localhost:8080/${postInfo.cover}`} alt="" />
      </div>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}
