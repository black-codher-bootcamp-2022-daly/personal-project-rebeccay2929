import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({ _id, title, summary, cover, createdAt }) {
  return (
    <div className="post">
          <Link  to={`/post/${_id}`}>
            {" "}
           <img  className="imgLink" src={"http://localhost:8080/" + cover} alt=" https://learntocodewith.me/wp-content/uploads/2019/11/How-to-Get-a-Great-Tech-Job-1536x805.png" /> 
          </Link>
              <div className="postInfo">

        <div className="texts">
          {" "}
          <Link to={`/post/${_id}`}>
            {" "}
            <div className="postTitle">
              {" "}
              <h2> {title} </h2>{" "}
            </div>
          </Link>
          
          <div className="postDate">
            <time> {formatISO9075(new Date(createdAt))}</time>{" "}
          </div>
        </div>
      </div>
      <div className="postDesc ">
            <p className="info">
              <a className="author"> Rebecca Boateng </a>
            </p>
            <p className="summary"> {summary} </p>

          </div>
          
    </div>
  );
}
