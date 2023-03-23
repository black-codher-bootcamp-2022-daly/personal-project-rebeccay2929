import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header"> 
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="logo">
              {" "}
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/create"> New Post</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/login"> Login</Link>
          </li>
          <li className="topListItem">
            <Link to="/register"> Register</Link>
          </li>
        </ul>
      </div>

     
    </div>
    <> 
    <div className="headeImg">
      <div className="headerTitles">
        <span className="headerTitleSm">The Tech Transition</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src=" https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div></>
    </div>
  );
}
