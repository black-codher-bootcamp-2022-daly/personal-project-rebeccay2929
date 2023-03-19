import {formatISO9075} from "date-fns";

export default function Post({title, summary, cover, content, createdAt }){
  return(
      <div className="post">
        <div className="image"><img src= "https://learntocodewith.me/wp-content/uploads/2019/11/How-to-Get-a-Great-Tech-Job-1536x805.png"></img> </div>
        <div className="texts"> <h2> {title} </h2>
        <p className="info">
          <a className="author"> Rebecca Boateng </a>
          <time> {formatISO9075(new Date(createdAt))}</time>
        </p>

      <p className="summary"> {summary} </p>
      </div>
          
          </div>
  )
}