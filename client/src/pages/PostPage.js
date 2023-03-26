import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import Sidebar from "../Sidebar";
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
      <div className="singlePost">
        <div className="singlePostWrapper">
          <div className="singlePostTitle">
            {" "}
            <h1>{postInfo.title}</h1>{" "}
          </div>

          <div className="singlePostEdit">
            <a className="edit-btn" href="">
              {" "}
              Edit Post
              <i className="singlePostIcon far fa-edit"></i>
            </a>

            <br></br>
            <a className="delete-btn" href="">
              Delete Post
              <i className="singlePostIcon far fa-trash-alt"></i>
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
            <img
              className="singlePostImg"
              src={`http://localhost:8080/${postInfo.cover}`}
              alt=""
            />
          </div>
            <span className="singlePostAuthor"> <i>Author: John Doe </i></span>

          <div className="singlePostInfo">
            {" "}
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: postInfo.content }}
            />
            <time> {formatISO9075(new Date(postInfo.createdAt))}</time>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}