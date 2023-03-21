import {formatISO9075} from "date-fns";

export default function Post({title, summary, cover, content, createdAt }){
  return(
      <div className="post">
         <div className="image">
          <img src={'http://localhost:8080/'+cover} alt=""/>
      </div>
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